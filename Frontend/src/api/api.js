import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your server's URL

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const createSupportTicket = async (ticketData) => {
    try {
        const response = await api.post('/support-tickets', ticketData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllSupportTickets = async (filters) => {
    try {
        const response = await api.get('/support-tickets', { params: filters });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createSupportAgent = async (agentData) => {
    try {
        const response = await api.post('/support-agents', agentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllSupportAgents = async () => {
    try {
        const response = await api.get('/support-agents');
        return response.data;
    } catch (error) {
        throw error;
    }
};
