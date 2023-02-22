import { Router } from 'express';
import passport from 'passport';

import { httpOverview, httpAnalytics } from '../controllers/analytics.controllers';

export const analyticsRoutes = Router();

analyticsRoutes.get('/overview', passport.authenticate('jwt', { session: false }), httpOverview);
analyticsRoutes.get('/analytics', passport.authenticate('jwt', { session: false }), httpAnalytics);
