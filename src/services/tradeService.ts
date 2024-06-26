import axios from 'axios';
import { BASE_URL } from '../contants';


export const fetchTrades = async (page = 1, rpp = 10) => {
  const response = await axios.get(`${BASE_URL}/trades`, {
    params: {
      rpp,
      page,
    },
  });
  return response.data.list;
};

export const deleteTrade = async (tradeId: string) => {
  const token = localStorage.getItem('token');
  await axios.delete(
    `${BASE_URL} / trades / ${tradeId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const createTrade = async (tradeData: {
  cards: { cardId: string; type: string }[];
}) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }

  const response = await axios.post(
    `${BASE_URL}/trades`,
    tradeData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export const fetchAllTrades = async () => {
  let allTrades: any = [];
  let currentPage = 1;
  let morePages = true;

  while (morePages) {
    try {
      const response = await axios.get(
        `${BASE_URL}/trades`,
        {
          params: {
            rpp: 10,
            page: currentPage,
          },
        },
      );
      allTrades = [...allTrades, ...response.data.list];
      morePages = response.data.more;
      currentPage++;
    } catch (error) {
      console.error('Error fetching trades:', error);
      break;
    }
  }

  return allTrades;
};
