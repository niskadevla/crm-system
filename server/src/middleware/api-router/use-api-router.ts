import { Express } from 'express';

import { ENV_CONFIG } from '../../env-config';
import { analyticsRoutes, authRoutes, categoryRoutes, orderRoutes, positionRoutes } from '../../routes';

export const useApiRouter = (app: Express): void => {
  app.use(`${ENV_CONFIG.API_URL}/auth`, authRoutes);
  app.use(`${ENV_CONFIG.API_URL}/analytics`, analyticsRoutes);
  app.use(`${ENV_CONFIG.API_URL}/category`, categoryRoutes);
  app.use(`${ENV_CONFIG.API_URL}/order`, orderRoutes);
  app.use(`${ENV_CONFIG.API_URL}/position`, positionRoutes);
};
