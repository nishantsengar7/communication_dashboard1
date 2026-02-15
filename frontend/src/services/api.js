import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchEmails = () => api.get('/emails/');
export const createEmail = (data) => api.post('/emails/', data);

export const fetchSMS = () => api.get('/sms/');
export const createSMS = (data) => api.post('/sms/', data);

export const fetchWhatsApp = () => api.get('/whatsapp/');
export const createWhatsApp = (data) => api.post('/whatsapp/', data);

export default api;
