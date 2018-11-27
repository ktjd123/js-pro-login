import axios from 'axios';

const apiUrl = '/api/v1/auth';

export const login = input => axios.post(`${apiUrl}/login`, { ...input });
export const register = input => axios.post(`${apiUrl}/register`, { ...input });
export const change = input => axios.post(`${apiUrl}/change`, { ...input });
export const check = () => axios.get(`${apiUrl}/check`);
export const all = () => axios.get(`${apiUrl}/all`);
