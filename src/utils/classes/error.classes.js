class CustomError {
  error = null;

  constructor(message) {
    this.error = { message };
  }
}

module.exports = CustomError