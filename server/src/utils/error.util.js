class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class CustomValidationError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message.map((item) => {
      const { type, msg, path } = item;
      return { type, msg, path };
    });
    this.statusCode = statusCode;
  }
}

const asyncErrorHandler = (asyncFunction) => {
  return (req, res, next) => {
    asyncFunction(req, res, next).catch((err) =>
      next(new CustomError(err.message, err.statusCode))
    );
  };
};

module.exports = { CustomError, CustomValidationError, asyncHandler: asyncErrorHandler};