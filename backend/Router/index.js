const express = require('express');
const userController = require('../Controller/userController');
const router = express.Router();

//define routes here
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);

module.exports = router;