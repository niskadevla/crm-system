const express = require('express');

const { httpGetByCategoryId, httpCreate, httpUpdate, httpRemove } = require('../controllers/position.controllers');

const router = express.Router();

router.get('/:categoryId', httpGetByCategoryId);
router.post('/', httpCreate);
router.patch('/:id', httpUpdate);
router.delete('/:id', httpRemove);

module.exports = router;
