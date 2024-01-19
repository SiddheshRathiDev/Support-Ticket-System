import React, { useState, useContext } from 'react';
import { createSupportTicket } from '../api/api';
import { AppContext } from '../context/AppProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import './CreateSupportTicketForm.css';

const CreateSupportTicketForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const [ticketData, setTicketData] = useState({
    topic: '',
    description: '',
    severity: '',
    type: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTicket = await createSupportTicket(ticketData);
      console.log('New support ticket created:', newTicket);
      setTicketData({
        topic: '',
        description: '',
        severity: '',
        type: '',
      });
      setError(null);
      dispatch({ type: 'SET_SUPPORT_TICKETS', payload: [newTicket, ...state.supportTickets] });
    } catch (error) {
      console.error('Error creating support ticket:', error);
      setError('Error creating support ticket. Please try again.');
    }
  };

  return (
    <Box className="create-ticket-form">
      <Typography variant="h2" color="primary" gutterBottom>
        <LiveHelpIcon fontSize="large" /> Create Support Ticket
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit} className="ticket-form">
        <TextField label="Topic" type="text" name="topic" value={ticketData.topic} onChange={handleChange} required />
        <TextField label="Description" multiline rows={4} name="description" value={ticketData.description} onChange={handleChange} required />
        <Typography variant="h6" gutterBottom>
          Severity
        </Typography>
        <RadioGroup row name="severity" value={ticketData.severity} onChange={handleChange}>
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
          <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="High" control={<Radio />} label="High" />
        </RadioGroup>
        <TextField label="Type" type="text" name="type" value={ticketData.type} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">
          Create Support Ticket
        </Button>
      </form>
    </Box>
  );
};

export default CreateSupportTicketForm;
