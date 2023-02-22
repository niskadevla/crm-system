import { Router } from 'express';
import passport from 'passport';

import { httpCreate, httpGetByCategoryId, httpRemove, httpUpdate } from '../controllers/position.controllers';

export const positionRoutes = Router();

positionRoutes.get('/:categoryId', passport.authenticate('jwt', { session: false }), httpGetByCategoryId);
positionRoutes.post('/', passport.authenticate('jwt', { session: false }), httpCreate);
positionRoutes.patch('/:id', passport.authenticate('jwt', { session: false }), httpUpdate);
positionRoutes.delete('/:id', passport.authenticate('jwt', { session: false }), httpRemove);
