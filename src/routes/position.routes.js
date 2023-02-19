const express = require('express');

const { getByCategoryId, create, update, remove } = require('../controllers/position.controllers');

const router = express.Router();

router.get('/:categoryId', getByCategoryId);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;
