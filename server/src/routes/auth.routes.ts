import { Router } from 'express';

import { httpLogin, httpRegister } from '../controllers/auth.controllers';

export const authRoutes = Router();

authRoutes.post('/login', httpLogin);
authRoutes.post('/register', httpRegister);
