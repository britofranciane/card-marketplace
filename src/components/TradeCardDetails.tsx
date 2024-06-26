import React from 'react';
import { TradeCardType, TradeType } from 'types';

interface Props {
  trade: TradeType;
  handleDelete?: (id: string) => void;
}

const TradeCardDetails: React.FC<Props> = ({ trade, handleDelete }) => {
  const { id, user, createdAt, tradeCards } = trade;

  return (
    <div className="border rounded-lg shadow-md p-4 w-full border-[#3D3D54]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-[#E5E8EB]">{user.name}</h2>
        <p className="text-sm text-[#E5E8EB]">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tradeCards.map((tradeCard: TradeCardType) => (
          <div
            key={tradeCard.id}
            className="bg-[#121217] p-3 border rounded-md flex items-center border-[#3D3D54]"
          >
            <img
              src={tradeCard.card.imageUrl}
              alt={tradeCard.card.name}
              className="w-24 h-24 rounded-md mr-3"
            />
            <div className="">
              <h3 className="text-lg font-medium text-[#fff]">
                {tradeCard.card.name}
              </h3>
              <p className="text-sm text-[#E5E8EB]">
                {tradeCard.card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {handleDelete && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleDelete(id)}
            className="border  border-red-500 hover:bg-red-500 text-white ml-2 px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TradeCardDetails;
