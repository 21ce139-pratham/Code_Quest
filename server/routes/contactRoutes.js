const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createContact);
// Define other routes (get, update, delete) here

module.exports = router;
