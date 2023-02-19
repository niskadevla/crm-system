const express = require('express');

const { getAll, getById, remove, create, update } = require('../controllers/category.controllers');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', remove);
router.post('/', create);
router.patch('/:id', update);

module.exports = router;
