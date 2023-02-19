const express = require('express');

const { overview, analytics } = require('../controllers/analytics.controllers');

const router = express.Router();

router.get('/overview', overview);
router.get('/analytics', analytics);

module.exports = router;
