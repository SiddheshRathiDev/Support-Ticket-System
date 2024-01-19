import React, { useState } from 'react';
import { createSupportAgent } from '../api/api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './CreateSupportAgentForm.css';

const CreateSupportAgentForm = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    active: true,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setAgentData({
      ...agentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newAgent = await createSupportAgent(agentData);
      console.log('New support agent created:', newAgent);
      setAgentData({
        name: '',
        email: '',
        phone: '',
        description: '',
        active: true,
      });
      setError(null);
    } catch (error) {
      console.error('Error creating support agent:', error);
      setError('Error creating support agent. Please try again.');
    }
  };

  return (
    <Box className="create-agent-form">
      <Typography variant="h2" color="primary" gutterBottom>
        <AccountCircleIcon fontSize="large" /> Create Support Agent
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit} className="agent-form">
        <TextField label="Name" type="text" name="name" value={agentData.name} onChange={handleChange} required />
        <TextField label="Email" type="email" name="email" value={agentData.email} onChange={handleChange} required />
        <TextField label="Phone" type="text" name="phone" value={agentData.phone} onChange={handleChange} required />
        <TextField label="Description" multiline rows={4} name="description" value={agentData.description} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">
          Create Support Agent
        </Button>
      </form>
    </Box>
  );
};

export default CreateSupportAgentForm;
