import helmet from 'helmet';
import cors from 'cors';
import { Express } from 'express';

export const useSecure = (app: Express): void => {
  app.use(helmet());
  app.use(cors());
}
