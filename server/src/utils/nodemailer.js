const nodemailer = require("nodemailer");
const { errorMessage } = require("../constants/message.js");
const { EMAIL_TYPE } = require("../constants/miscellaneous.js");
const { OTPEMailView } = require("../views/emailView.js");
const { createTimeStampForEmail } = require("./time.util.js");

const transporter = nodemailer.createTransport({
  service: `${process.env.NODEMAILER_SMTP_SERVICE}`,
  host: `${process.env.NODEMAILER_HOST}`,
  port: process.env.NODEMAILER_PORT,
  secure: JSON.parse(process.env.NODEMAILER_SECURE),
  auth: {
    user: `${process.env.NODEMAILER_USER}`,
    pass: `${process.env.NODEMAILER_PASS}`,
  },
});

/* 
payload : {
    to: email,
    subject: string,
    content: {
        text: string
        timeStamp: String
    }
}

type = otp || purchase
*/
const sendEmail = async (payload, type) => {
  if (
    !(
      payload &&
      type &&
      "to" in payload &&
      "subject" in payload &&
      "content" in payload &&
      "text" in payload.content &&
      "timeStamp" in payload.content
    )
  ) {
    return {
      success: false,
      message: errorMessage.insufficientEmailInput.message,
      statusCode: errorMessage.insufficientEmailInput.statusCode,
    };
  }

  let emailPayloadHTML;

  if(type === EMAIL_TYPE.OTP) {
    const {text, timeStamp} = payload.content

    emailPayloadHTML = OTPEMailView(text, createTimeStampForEmail(timeStamp))
  }

  try {
    await transporter.sendMail({
      from: `${process.env.ONIX_CORPORATE_EMAIl}`,
      to: payload.to,
      subject: payload.subject,
      html: emailPayloadHTML
    });

    return { success: true };
  } catch (err) {
    return { success: false, message: err.message, statusCode: err.statusCode };
  }
};

module.exports = { sendEmail };