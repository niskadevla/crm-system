const User = require('./user.mongo');
const { encryptPassword } = require('../utils/functions/encrypt');

const findUserByFilter = async (filter) => {
  return User.findOne(filter);
}

const getUserByIdWithFields = async (userId, fields) => {
  return User.findById(userId).select(fields);
}

const createNewUser = ({ email, password }) => {
  const user = new User({
    email,
    password: encryptPassword(password)
  });

  return user.save();
}

module.exports = {
  findUserByFilter,
  getUserByIdWithFields,
  createNewUser
}
