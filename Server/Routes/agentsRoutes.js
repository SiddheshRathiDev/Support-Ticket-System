const express = require('express');
const router = express.Router();
const agentController = require('../Controllers/agentsController');

// Create Support Agent
router.post('/', agentController.createSupportAgent);

// Get All Support Agents
router.get('/', agentController.getAllSupportAgents);

module.exports = router;
