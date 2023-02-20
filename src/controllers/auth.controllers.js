const JWT = require('jsonwebtoken');

const ENV_CONFIG = require('../env-config')
const { findUserByFilter, createNewUser } = require('../models/user.models')
const {  matchPasswords } = require('../utils/functions/encrypt');
const CustomError = require('../utils/classes/error.classes');
const errorHandler = require('../utils/functions/error-handler');

const httpLogin = async ({ body: { email, password } }, res) => {
  const candidate = await findUserByFilter({ email });

  if (candidate) {
    if (matchPasswords(password, candidate.password)) {
      const jwtPayload = {
        email,
        userId: candidate._id
      };
      const jwtOptions = { expiresIn: '1h' };
      const token = JWT.sign(jwtPayload, ENV_CONFIG.JWT, jwtOptions);

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
  const candidate = await findUserByFilter({ email });

  if (candidate) {
    return res.status(409).json(new CustomError(`User with this ${ email } already exists. Try another one!`));
  } else {
    try {
      const user = await createNewUser(body);

      return res.status(201).json(user);
    } catch (err) {
      return errorHandler(res, err);
    }
  }
}

module.exports = {
  httpLogin,
  httpRegister
};
