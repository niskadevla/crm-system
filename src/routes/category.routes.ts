import { Router } from 'express';
import passport from 'passport';

import { httpCreate, httpGetAll, httpGetById, httpRemove, httpUpdate } from '../controllers/category.controllers';

export const categoryRoutes = Router();

categoryRoutes.get('/', passport.authenticate('jwt', { session: false }), httpGetAll);
categoryRoutes.get('/:id', passport.authenticate('jwt', { session: false }), httpGetById);
categoryRoutes.delete('/:id', passport.authenticate('jwt', { session: false }), httpRemove);
categoryRoutes.post('/', passport.authenticate('jwt', { session: false }), httpCreate);
categoryRoutes.patch('/:id', passport.authenticate('jwt', { session: false }), httpUpdate);
