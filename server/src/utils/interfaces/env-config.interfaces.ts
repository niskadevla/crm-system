import { NodeEnvEnums } from '../enums';

export interface EnvironmentConfig {
  env: NodeEnvEnums,
  mongoURI: string;
  JWT: string;
  API_URL: string;
}