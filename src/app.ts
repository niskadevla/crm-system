import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { useAuthentication } from './middleware/authentication/passport/passport';
import { useSecure } from './middleware/secure/use-secure';
import { ENV_CONFIG } from './env-config';
import { authRoutes, analyticsRoutes, categoryRoutes, orderRoutes, positionRoutes } from './routes';

export const app = express();

useSecure(app);
useAuthentication(app);

app.use('/uploads', express.static(path.join(__dirname, '../', 'uploads')));
app.use(morgan('combined'));
app.use(express.json());

app.use(`${ENV_CONFIG.API_URL}/auth`, authRoutes);
app.use(`${ENV_CONFIG.API_URL}/analytics`, analyticsRoutes);
app.use(`${ENV_CONFIG.API_URL}/category`, categoryRoutes);
app.use(`${ENV_CONFIG.API_URL}/order`, orderRoutes);
app.use(`${ENV_CONFIG.API_URL}/position`, positionRoutes);
