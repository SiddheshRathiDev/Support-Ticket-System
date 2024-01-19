import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GroupIcon from '@mui/icons-material/Group';
import './SupportAgentList.css';

const SupportAgentList = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="support-agent-list">
      <Typography variant="h2" color="primary" gutterBottom>
        <GroupIcon fontSize="large" /> Support Agents
      </Typography>
      <List>
        {state.supportAgents.map((agent) => (
          <ListItem key={agent._id} className="agent-item">
            <div className="agent-details">
              <Typography variant="h6" color="primary">
                {agent.name}
              </Typography>
              <Typography color="textSecondary">{agent.email}</Typography>
              <Typography color="textSecondary">{agent.phone}</Typography>
            </div>
            <Typography color="textSecondary">{agent.description}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SupportAgentList;
