const express = require('express');
const passport = require('passport');

const { httpGetAll, httpCreate } = require('../controllers/order.controllers');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), httpGetAll);
router.post('/', passport.authenticate('jwt', { session: false }), httpCreate);

module.exports = router;
