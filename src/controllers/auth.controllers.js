const login = ({ body: { email, password } }, res) => {
  res.status(200).json({
    email,
    password
  });
};

const register = (req, res) => {
  res.status(200).json({
    register: 'from controller'
  })
}

module.exports = {
  login,
  register
};
