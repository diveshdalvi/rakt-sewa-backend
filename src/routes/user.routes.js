const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// User routes
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);

// Blood request routes
router.post('/blood-requests', userController.createBloodRequest);
router.get('/:userId/blood-requests', userController.getUserBloodRequests);

module.exports = router;
