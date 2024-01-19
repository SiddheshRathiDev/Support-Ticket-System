const mongoose = require('mongoose');

const supportTicketSchema = new mongoose.Schema({
  topic: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  severity: String,
  type: String,
  assignedTo: String,
  status: { type: String, default: 'New' }, // New, Assigned, Resolved
  resolvedOn: Date,
});

const SupportTicket = mongoose.model('SupportTicket', supportTicketSchema);

module.exports = SupportTicket;
