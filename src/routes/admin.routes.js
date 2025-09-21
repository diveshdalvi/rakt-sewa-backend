const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

// Admin routes
router.get('/users', adminController.getAllUsers);
router.put('/users/approve-many', adminController.approveManyUsers); // Add this route
router.get('/admins', adminController.getAllAdmins);
router.get('/blood-requests', adminController.getAllBloodRequests);
router.put('/blood-requests/:id', adminController.updateBloodRequest);

module.exports = router;
