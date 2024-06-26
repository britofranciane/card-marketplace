import axios from 'axios';
import { BASE_URL } from '../contants';

export const fetchAllCards = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/cards`,
      {
        params: {
          rpp: 10,
          page: 1,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching cards', error);
  }
};

export const fetchUserCards = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await axios.get(
      `${BASE_URL}/me/cards`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching user cards', error);
  }
};

export const addCardToUser = async (cardData: { cardIds: string[] }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }

  const response = await axios.post(
    `${BASE_URL}/me/cards`,
    cardData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
