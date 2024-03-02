const { validationResult } = require("express-validator");
const OTPGenerator = require("otp-generator");
const {
  asyncHandler,
  CustomValidationError,
  CustomError,
} = require("../utils/error.util.js");
const { OTP } = require("../models/otp.model.js");
const { createTimeStamp } = require("../utils/time.util.js");
const { User } = require("../models/user.model.js");
const { sendEmail } = require("../utils/nodemailer.js");
const { EMAIL_TYPE } = require("../constants/miscellaneous.js");
const {
  message,
  errorMessage,
  successMessage,
} = require("../constants/message.js");

const otpController = {};

/*
POST /api/otp/send
Auth: yes
Access: private
*/
otpController.sendOTP = asyncHandler(async (req, res) => {
  const user = req.user;

  const generatedOTP = OTPGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  let otp = await OTP.create({ user: user._id, OTP: generatedOTP });
  otp = await otp.populate({ path: "user", select: { email: 1 } });

  const emailResponse = await sendEmail(
    {
      to: otp.user.email,
      subject: message.OTPEmailSubject,
      content: {
        text: otp.OTP,
        timeStamp: otp.expiredAt,
      },
    },
    EMAIL_TYPE.OTP
  );

  if (!emailResponse.success) {
    throw new CustomError(emailResponse.message, emailResponse.statusCode);
  }

  res.json({
    message: `One-time password (OTP) has been sent to your email. Verify yourself before ${createTimeStamp(
      otp.expiredAt
    )}.`,
  });
});

/*
POST /api/otp/verify
Auth: yes
Access: private
*/
otpController.verifyOTP = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new CustomValidationError(errors.array(), 400);
  }

  const user = req.user;
  const requestedOTP = req.body.OTP;

  const otp = await OTP.findOne({ user: user._id });

  try {
    if (!otp) {
      throw new CustomError(
        errorMessage.invalidOTP.message,
        errorMessage.invalidOTP.statusCode
      );
    }

    if (new Date() > new Date(otp.expiredAt)) {
      throw new CustomError(
        errorMessage.invalidOTP.message,
        errorMessage.invalidOTP.statusCode
      );
    }

    if (otp.OTP === requestedOTP) {
      await User.findByIdAndUpdate(otp.user, { verified: true }, { new: true });
    } else {
      throw new CustomError(
        errorMessage.invalidOTP.message,
        errorMessage.invalidOTP.statusCode
      );
    }
  } finally {
    if (otp) {
      await OTP.findByIdAndDelete(otp._id);
    }
  }

  res.json({ message: successMessage.OTPVerified });
});

module.exports = { otpController };