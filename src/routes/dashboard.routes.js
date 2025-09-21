const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

// Dashboard Statistics
router.get('/stats', dashboardController.getDashboardStats);

// Blood Type Distribution (Donors)
router.get('/blood-stats/donors', dashboardController.getDonorBloodStats);

// Blood Type Distribution (Requests)
router.get('/blood-stats/requests', dashboardController.getRequestBloodStats);

// Donor Locations for Map
router.get('/donor-locations', dashboardController.getDonorLocations);

module.exports = router;