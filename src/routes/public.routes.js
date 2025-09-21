const express = require('express');
const router = express.Router();
const publicController = require('../controllers/public.controller');

router.get('/blood-requests', publicController.getApprovedBloodRequests);

module.exports = router;