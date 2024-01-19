import React, { createContext, useReducer, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { getAllSupportAgents, getAllSupportTickets } from '../api/api';


const initialState = {
  supportTickets: [],
  supportAgents: []
};

export const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SUPPORT_TICKETS':
      return { ...state, supportTickets: action.payload };
    case 'SET_SUPPORT_AGENTS' :
        return { ...state, supportAgents: action.payload};
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [agents, tickets] = await Promise.all([
          getAllSupportAgents(),
          getAllSupportTickets(),
        ]);

        console.log('Fetched Support Agents:', agents);
        console.log('Fetched Support Tickets:', tickets);

        dispatch({ type: 'SET_SUPPORT_AGENTS', payload: agents });
        dispatch({ type: 'SET_SUPPORT_TICKETS', payload: tickets });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CssBaseline />
      <Container>
        {children}
      </Container>
    </AppContext.Provider>
  );
};
