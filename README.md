# Support Ticket System

This is a simple support ticket system where users can create tickets, and support agents can view and handle them.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB Atlas account (or local MongoDB instance)
- `.env` file with MongoDB connection details

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/SiddheshRathiDev/Support-Ticket-System.git


   
Certainly! Here's a simple README template that you can use for your project. Make sure to customize it based on your project's specific details:

markdown
Copy code
# Support Ticket System

This is a simple support ticket system where users can create tickets, and support agents can view and handle them.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB Atlas account (or local MongoDB instance)
- `.env` file with MongoDB connection details (refer to `.env.example`)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/support-ticket-system.git
Navigate to the project directory:

bash
Copy code
cd support-ticket-system
Install dependencies:

bash
Copy code
npm install
Create a .env file in the project root and add your MongoDB connection details:

env
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
PORT=3000
Start the Node.js server:

bash
Copy code
npm start
The server should now be running on http://localhost:3000.

API Endpoints
Support Agents
GET /api/support-agents: Get all support agents.
POST /api/support-agents: Create a new support agent.
Support Tickets
GET /api/support-tickets: Get all support tickets.
POST /api/support-tickets: Create a new support ticket.

Frontend
The frontend application is built using React and Material-UI.
