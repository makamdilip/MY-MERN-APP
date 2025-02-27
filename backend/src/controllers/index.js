const express = require('express');
const router = express.Router();

// Example controller function
const getExampleData = (req, res) => {
    res.status(200).json({ message: 'Example data' });
};

// Define routes and link them to controller functions
router.get('/example', getExampleData);

// Export the router
module.exports = router;