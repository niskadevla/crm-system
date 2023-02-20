const express = require('express');
const passport = require('passport');

const { httpGetAll, httpGetById, httpRemove, httpCreate, httpUpdate } = require('../controllers/category.controllers');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), httpGetAll);
router.get('/:id', passport.authenticate('jwt', { session: false }), httpGetById);
router.delete('/:id', passport.authenticate('jwt', { session: false }), httpRemove);
router.post('/', passport.authenticate('jwt', { session: false }), httpCreate);
router.patch('/:id', passport.authenticate('jwt', { session: false }), httpUpdate);

module.exports = router;
