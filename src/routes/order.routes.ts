import { Router } from 'express';
import passport from 'passport';

import { httpCreate, httpGetAll } from '../controllers/order.controllers';

export const orderRoutes = Router();

orderRoutes.get('/', passport.authenticate('jwt', { session: false }), httpGetAll);
orderRoutes.post('/', passport.authenticate('jwt', { session: false }), httpCreate);
