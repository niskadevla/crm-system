const path = require('path');

require('dotenv').config({
  debug: true,
  path: path.resolve(__dirname, '../', 'config', 'config.env' )
});

const ENV_CONFIG = {
  mongoURI: process.env.MONGO_URI
}

module.exports = ENV_CONFIG;