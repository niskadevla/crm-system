const httpLogin = ({ body: { email, password } }, res) => {
  res.status(200).json({
    email,
    password
  });
};

const httpRegister = (req, res) => {
  res.status(200).json({
    register: 'from controller'
  })
}

module.exports = {
  httpLogin,
  httpRegister
};
