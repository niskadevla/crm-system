import { Express } from 'express';
import morgan from 'morgan';

import { ENV_CONFIG } from '../../env-config';
import { NodeEnvEnums } from '../../utils';

export const useLogger = (app: Express): void => {
  ENV_CONFIG.env === NodeEnvEnums.Dev && app.use(morgan('combined'));
};
