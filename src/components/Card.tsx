import React from 'react';
import { CardType } from 'types';
import defaultImageUrl from '../assets/default-thumb.png';

interface Props {
  card: CardType;
}

const Card: React.FC<Props> = ({ card }) => {
  const { id, name, description, imageUrl, createdAt } = card || {};

  return (
    <div className="border border-[#3c3c53] rounded-xl p-4 bg-[#1c1c26]">
      <img
        src={imageUrl || defaultImageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="p-4">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-[#9E9EB8]">{description}</p>
        <p className="text-[#9E9EB8] mt-2 text-sm">
          Created in:{' '}
          {createdAt ? new Date(createdAt).toLocaleDateString() : ''}
        </p>
      </div>
    </div>
  );
};

export default Card;
