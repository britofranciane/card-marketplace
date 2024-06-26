import axios from 'axios';
import { BASE_URL } from '../contants';

export const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }

  const response = await axios.get(
    `${BASE_URL}/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
