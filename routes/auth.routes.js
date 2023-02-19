const express = require('express');

const { login, register } = require('../controllers/auth.controllers');

const router = express.Router();

// localhost:5000/api/auth/login
router.post('/login', login);
// localhost:5000/api/auth/register
router.post('/register', register);

module.exports = router;
