const express = require('express');

const { httpGetAll, httpCreate } = require('../controllers/order.controllers');

const router = express.Router();

router.get('/', httpGetAll);
router.post('/', httpCreate);

module.exports = router;
