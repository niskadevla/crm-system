const helmet = require('helmet');
const cors = require('cors');

const useSecure = (app) => {
  app.use(helmet());
  app.use(cors());
}

module.exports = useSecure;