const express = require('express');

const { httpGetAll, httpGetById, httpRemove, httpCreate, httpUpdate } = require('../controllers/category.controllers');

const router = express.Router();

router.get('/', httpGetAll);
router.get('/:id', httpGetById);
router.delete('/:id', httpRemove);
router.post('/', httpCreate);
router.patch('/:id', httpUpdate);

module.exports = router;
