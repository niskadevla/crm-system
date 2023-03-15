import express from 'express';
import path from 'path';

import { useAuthentication } from './middleware/authentication/passport/passport';
import { useSecure } from './middleware/secure/use-secure';
import { useLogger } from './middleware/logger/use-logger';
import { useApiRouter } from './middleware/api-router/use-api-router';
import { ENV_CONFIG } from './env-config';
import { NodeEnvEnums } from './utils';

export const app = express();

const uploadsPath = ENV_CONFIG.env === NodeEnvEnums.Prod ? ['../', '../', '../', 'uploads'] : ['../', 'uploads'];

useLogger(app);
useSecure(app);
useAuthentication(app);

app.use('/uploads', express.static(path.join(__dirname, ...uploadsPath)));

app.use(express.json());

useApiRouter(app);

if (ENV_CONFIG.env === NodeEnvEnums.Prod) {
  app.use(express.static(path.join(__dirname, '../', 'public')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
}
