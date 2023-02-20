const express = require('express');
const passport = require('passport');

const { httpOverview, httpAnalytics } = require('../controllers/analytics.controllers');

const router = express.Router();

router.get('/overview', passport.authenticate('jwt', { session: false }), httpOverview);
router.get('/analytics', passport.authenticate('jwt', { session: false }), httpAnalytics);

module.exports = router;
