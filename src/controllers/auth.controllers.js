const JWT = require('jsonwebtoken');

const ENV_CONFIG = require('../env-config')

const { findUser, createNewUser, matchPasswords } = require('../models/auth.models');
const CustomError = require('../utils/classes/error.classes');

const httpLogin = async ({ body: { email, password } }, res) => {
  const candidate = await findUser({ email });

  if (candidate) {
    if (matchPasswords(password, candidate.password)) {
      const token = JWT.sign({
        email,
        userId: candidate._id
      }, ENV_CONFIG.JWT, { expiresIn: 60 * 60 });

      return res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      return res.status(401).json(new CustomError('Passwords do not match. Try again!'));
    }
  } else {
    return res.status(404).json(new CustomError(`User with this email ${email} does not exist!`));
  }
};

const httpRegister = async ({ body }, res) => {
  const { email } = body;
  const candidate = await findUser({ email });

  if (candidate) {
    return res.status(409).json(new CustomError(`User with this ${ email } already exists. Try another one!`));
  } else {
    return res.status(201).json(await createNewUser(body));
  }
}

module.exports = {
  httpLogin,
  httpRegister
};
