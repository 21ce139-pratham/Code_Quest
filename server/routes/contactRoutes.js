const express = require('express');
const router = express.Router();
const { createContact ,getContacts} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

router.post('/createContact', protect, createContact);
router.get('/getContacts', protect, getContacts); 
// Define other routes (get, update, delete) here

module.exports = router;
