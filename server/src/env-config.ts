import path from 'path';
import dotenv from 'dotenv';

import { EnvironmentConfig } from './utils';

dotenv.config({
  debug: true,
  path: path.resolve(__dirname, '../', 'config', 'config.env')
});

export const ENV_CONFIG: EnvironmentConfig = {
  mongoURI: process.env.MONGO_URI || '',
  JWT: process.env.JWT || '',
  API_URL: '/api'
}
