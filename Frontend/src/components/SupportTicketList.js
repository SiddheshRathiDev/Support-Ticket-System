import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppProvider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './SupportTicketList.css';
import { getAllSupportTickets } from '../api/api';

const SupportTicketList = () => {
  const { state } = useContext(AppContext);
  const [tickets, setTickets] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    severity: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllSupportTickets(filters);
        setTickets(result);
      } catch (error) {
        console.error('Error fetching support tickets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  const handleFilterChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="support-ticket-list">
      <Typography variant="h2" color="primary" gutterBottom>
        <LiveHelpIcon fontSize="large" /> Support Tickets
      </Typography>
      <div className="filter-section">
        <FormControl>
          <Select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Status
            </MenuItem>
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Assigned">Assigned</MenuItem>
            <MenuItem value="Resolved">Resolved</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select
            name="severity"
            value={filters.severity}
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Severity
            </MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </div>
      {loading && <p>Loading...</p>}

      <List>
        {tickets.map((ticket) => (
          <ListItem key={ticket._id} className="ticket-item">
            <Typography variant="h6" color="primary">
              {ticket.topic}
            </Typography>
            <Typography color="textSecondary">{ticket.severity}</Typography>
            <Typography color="textSecondary">{ticket.type}</Typography>
            <Typography color="textSecondary">Assigned To: {ticket.assignedTo}</Typography>
            <Typography color="textSecondary">Status: {ticket.status}</Typography>
            <Typography color="textSecondary">{ticket.description}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SupportTicketList;

