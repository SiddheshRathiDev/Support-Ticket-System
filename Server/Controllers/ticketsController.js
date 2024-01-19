const SupportTicket = require('../Models/ticketModel');
const SupportAgent = require('../Models/agentModel');

const createSupportTicket = async (req, res) => {
  try {
    const activeAgents = await SupportAgent.find({ active: true });

    if (activeAgents.length === 0) {
      return res.status(400).json({ error: 'No active support agents available for assignment.' });
    }

    const nextAgentIndex = Math.floor(Math.random() * activeAgents.length);
    const assignedAgent = activeAgents[nextAgentIndex];

    const newTicket = await SupportTicket.create({
      ...req.body,
      assignedTo: assignedAgent._id,
      status: 'Assigned',
    });

    res.json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllSupportTickets = async (req, res) => {
  try {
    const { status, assignedTo, severity, type, sortField, page, pageSize } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (assignedTo) filter.assignedTo = assignedTo;
    if (severity) filter.severity = severity;
    if (type) filter.type = type;

    const sort = {};
    if (sortField) sort[sortField] = 1;

    const skip = (page - 1) * pageSize;
    const limit = parseInt(pageSize);

    const allTickets = await SupportTicket.find(filter).sort(sort).skip(skip).limit(limit);

    res.json(allTickets);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createSupportTicket,
  getAllSupportTickets,
};