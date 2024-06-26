import React from 'react';
import Loading from './Loading';
import { CardType } from '../types';

interface Props {
  card: CardType;
  loading?: boolean;
}

const Card: React.FC<Props> = ({ card, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div
      key={card.id}
      className="relative bg-white shadow-md rounded overflow-hidden"
      style={{ width: 'max-content' }}
    >
      <img src={card.imageUrl} alt={card.name} className=" object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <div className="text-center text-white transform translate-y-full hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold">{card.name}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
