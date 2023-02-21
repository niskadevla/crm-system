import { Router } from 'express';

import { httpCreate, httpGetByCategoryId, httpRemove, httpUpdate } from '../controllers/position.controllers';

export const positionRoutes = Router();

positionRoutes.get('/:categoryId', httpGetByCategoryId);
positionRoutes.post('/', httpCreate);
positionRoutes.patch('/:id', httpUpdate);
positionRoutes.delete('/:id', httpRemove);
