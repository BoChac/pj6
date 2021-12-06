const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');

router.get('/register',UserController.register);
router.get('/login',UserController.login);
router.post('/saved',UserController.saved);

module.exports = router;