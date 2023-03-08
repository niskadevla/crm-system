import path from 'path';
import dotenv from 'dotenv';

import { EnvironmentConfig, NodeEnvEnums } from './utils';

const configPath = process.env.NODE_ENV === NodeEnvEnums.Prod ? 'config.prod.env' : 'config.dev.env';

dotenv.config({
  debug: true,
  path: path.resolve(__dirname, '../', 'config', configPath)
});

export const ENV_CONFIG: EnvironmentConfig = {
  env:  process.env.NODE_ENV as NodeEnvEnums,
  mongoURI: process.env.MONGO_URI || '',
  JWT: process.env.JWT || '',
  API_URL: '/api'
}
