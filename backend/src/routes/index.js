const express = require('express');
const router = express.Router();

// Import controller functions
const { exampleController } = require('../controllers');

// Define routes
router.get('/example', exampleController);

module.exports = router;