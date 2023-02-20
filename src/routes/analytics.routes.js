const express = require('express');

const { httpOverview, httpAnalytics } = require('../controllers/analytics.controllers');

const router = express.Router();

router.get('/overview', httpOverview);
router.get('/analytics', httpAnalytics);

module.exports = router;
