// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import CreateSupportAgentForm from './components/CreateSupportAgentForm';
import CreateSupportTicketForm from './components/CreateSupportTicketForm';
import SupportAgentList from './components/SupportAgentList';
import SupportTicketList from './components/SupportTicketList';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Router>
      <AppProvider>
        <CssBaseline />
        <Container>
          <Typography variant="h1" component="div" gutterBottom>
            Support Desk App
          </Typography>
          <nav>
            <ul>
              <li>
                <Link to="/agents">Agents</Link>
              </li>
              <li>
                <Link to="/tickets">Tickets</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/agents" element={<>
              <CreateSupportAgentForm />
              <SupportAgentList />
            </>} />
            <Route path="/tickets" element={<>
              <CreateSupportTicketForm />
              <SupportTicketList />
            </>} />
          </Routes>
        </Container>
      </AppProvider>
    </Router>
  );
}

export default App;
