const jwt = require("jsonwebtoken");
const {errorMessage } = require("../constants/message.js");
const { CustomError } = require("./error.util.js");

const generatePayload = (user) => {
  if (!user) {
    return {};
  }

  if (user.role) {
    return { _id: user._id, role: user.role };
  } else {
    return { _id: user._id };
  }
};

const generateToken = (payload) => {
  try {
    if (!payload) {
      throw new CustomError(
        errorMessage.payloadMissing.message,
        errorMessage.payloadMissing.statusCode
      );
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    return { success: true, data: token };
  } catch (err) {
    return { success: false, message: err.message, statusCode: err.statusCode };
  }
};

module.exports = { generateToken, generatePayload };