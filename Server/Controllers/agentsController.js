const SupportAgent = require('../Models/agentModel');

const createSupportAgent = async (req, res) => {
  try {
    const newAgent = await SupportAgent.create(req.body);
    res.json(newAgent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllSupportAgents = async (req, res) => {
  try {
    const allAgents = await SupportAgent.find();
    res.json(allAgents);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createSupportAgent,
  getAllSupportAgents,
};
