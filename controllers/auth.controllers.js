const login = (req, res) => {
  res.status(200).json({
    login: true
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
