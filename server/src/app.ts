import express from 'express';
import path from 'path';

import { useAuthentication } from './middleware/authentication/passport/passport';
import { useSecure } from './middleware/secure/use-secure';
import { useLogger } from './middleware/logger/use-logger';
import { useApiRouter } from './middleware/api-router/use-api-router';

export const app = express();

useLogger(app);
useSecure(app);
useAuthentication(app);

app.use('/uploads', express.static(path.join(__dirname, '../', 'uploads')));

app.use(express.json());

useApiRouter(app);
