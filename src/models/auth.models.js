const bcrypt = require('bcryptjs');

const User = require('./user.mongo');

const findUser = async (filter) => {
  return User.findOne(filter);
}

const existsUserWithEmail = async (email) => {
  return await findUser({ email });
}

const createNewUser = async ({ email, password }) => {
  const salt = bcrypt.genSaltSync();
  const user = new User({
    email,
    password: bcrypt.hashSync(password, salt)
  });

  try {
    return await user.save();
  } catch (err) {
    // TODO create error handle
    console.error(`Could not save user ${err}`);
  }
}

module.exports = {
  existsUserWithEmail,
  createNewUser
}
