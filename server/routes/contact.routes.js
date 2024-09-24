const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controllers');

router.post('/contact',contactController.handleContactInformation)

module.exports = router;