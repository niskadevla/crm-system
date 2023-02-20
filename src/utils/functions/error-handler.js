const CustomError = require('../classes/error.classes');

const errorHandler = (res, error) => {
  const message = error.message ? error.message : error;

  return res.status(500).json(new CustomError(message));
}

module.exports = errorHandler;