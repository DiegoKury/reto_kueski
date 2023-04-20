const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users
router.get('/', userController.getUsers);

// GET /users/:id
router.get('/:id', userController.getUserById);

// POST /users
router.post('/', userController.createUser);

// PATCH /users/:id
router.patch('/:id', userController.updateUser);

// DELETE /users/:id
router.delete('/:id', userController.deleteUser);

module.exports = router;
