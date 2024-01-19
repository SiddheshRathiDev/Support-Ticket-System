const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb+srv://SiddheshRathi:Om123456@support.4c5w58l.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const agentRoutes = require('./Routes/agentsRoutes');
const ticketRoutes = require('./Routes/ticketsRoutes');

app.use('/api/support-agents', agentRoutes);
app.use('/api/support-tickets', ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
