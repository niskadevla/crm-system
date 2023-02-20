const express = require('express');

const { httpLogin, httpRegister } = require('../controllers/auth.controllers');

const router = express.Router();

// localhost:5000/api/auth/login
router.post('/login', httpLogin);
// localhost:5000/api/auth/register
router.post('/register', httpRegister);

module.exports = router;
