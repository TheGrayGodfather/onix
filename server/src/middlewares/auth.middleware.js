const jwt = require("jsonwebtoken")
const { errorMessage } = require("../constants/message.js");
const { CustomError } = require("../utils/error.util.js");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(
      new CustomError(
        errorMessage.unauthorize.message,
        errorMessage.unauthorize.statusCode
      )
    );
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { _id, role } = payload;
    req.user = { _id, role };
    next();
  } catch (err) {
    next(
      new CustomError(
        errorMessage.unauthorize.message,
        errorMessage.unauthorize.statusCode
      )
    );
  }
};

const authorizeUser = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      next(
        new CustomError(
          errorMessage.forbidden.message,
          errorMessage.forbidden.statusCode
        )
      );
    }
  };
};

module.exports = { authenticateUser, authorizeUser };