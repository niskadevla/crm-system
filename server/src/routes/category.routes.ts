import { Router } from 'express';
import passport from 'passport';

import { httpCreate, httpGetAll, httpGetById, httpRemove, httpUpdate } from '../controllers/category.controllers';
import { Upload } from '../middleware/upload-files/upload';
import { FormEnum } from '../utils';

export const categoryRoutes = Router();

categoryRoutes.get('/', passport.authenticate('jwt', { session: false }), httpGetAll);
categoryRoutes.get('/:id', passport.authenticate('jwt', { session: false }), httpGetById);
categoryRoutes.delete('/:id', passport.authenticate('jwt', { session: false }), httpRemove);
categoryRoutes.post('/', Upload.single(FormEnum.IMAGE), passport.authenticate('jwt', { session: false }), httpCreate);
categoryRoutes.patch('/:id', Upload.single(FormEnum.IMAGE), passport.authenticate('jwt', { session: false }), httpUpdate);
