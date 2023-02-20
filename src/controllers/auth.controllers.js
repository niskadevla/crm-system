const { createNewUser, existsUserWithEmail } = require('../models/auth.models');

const httpLogin = ({ body: { email, password } }, res) => {
  res.status(200).json({
    email,
    password
  });
};

const httpRegister = async ({ body }, res) => {
  const candidate = await existsUserWithEmail(body.email);

  if (candidate) {
    return res.status(409).json({
      message: `User with this ${body.email} already exists. Try another one!`
    });
  } else {
    return res.status(201).json(await createNewUser(body));
  }
}

module.exports = {
  httpLogin,
  httpRegister
};
