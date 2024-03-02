const errorMessage = {
  userNotFound: { message: "user not found", statusCode: 404 },
  payloadMissing: {
    message: "payload is missing in generation of token",
    statusCode: 400,
  },
  invalidEmailPassword: {
    message: "invalid email or password",
    statusCode: 401,
  },
  unauthorize: { message: "unauthorized user", statusCode: 401 },
  forbidden: { message: "access forbidden", statusCode: 403 },
  insufficientEmailInput: {
    message: "insufficient inputs for mail",
    statusCode: 400,
  },
  invalidOTP: {
    message: "provided one-time password is invalid or has expired",
    statusCode: 401,
  },
};

const message = {
  OTPEmailSubject: "ONIX OTP verification",
};

const successMessage = {
  OTPVerified: "congratulations, now you are a verified user of onix"
};

module.exports = { errorMessage, message, successMessage };
