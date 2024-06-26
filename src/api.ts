import axios from 'axios';
import { BASE_URL } from 'contants';


const api = axios.create({
  baseURL: BASE_URL,
});

export const deleteTrade = async (tradeId: string) => {
  const token = localStorage.getItem('token');
  await api.delete(`/trades/${tradeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default api;
