import axios from 'axios';
import { BASE_URL } from '../contants';

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
};

export const register = async (userData: {
  username: string;
  password: string;
  email: string;
}) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

export const fetchUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }
  const response = await axios.get(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
