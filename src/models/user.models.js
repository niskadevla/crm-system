const User = require('./user.mongo');

const getUserByIdWithFields = async (userId, fields) => {
  return User.findById(userId).select(fields);
}

module.exports = {
  getUserByIdWithFields
}