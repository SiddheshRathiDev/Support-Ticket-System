const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticketsController');

// Create Support Ticket
router.post('/', ticketController.createSupportTicket);

// Get All Support Tickets
router.get('/', ticketController.getAllSupportTickets);

module.exports = router;
