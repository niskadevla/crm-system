const bcrypt = require('bcryptjs');

const User = require('./user.mongo');

const findUser = async (filter) => {
  return User.findOne(filter);
}

const createNewUser = ({ email, password }) => {
  const salt = bcrypt.genSaltSync();
  const user = new User({
    email,
    password: bcrypt.hashSync(password, salt)
  });

  return user.save();
}

const matchPasswords = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

module.exports = {
  findUser,
  createNewUser,
  matchPasswords
}
