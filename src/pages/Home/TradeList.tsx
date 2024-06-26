import React from 'react';
import { useQuery } from 'react-query';
import { fetchTrades } from '@services/tradeService';
import { Loading, TradeCardDetails } from '@components/index';
import { TradeType } from 'types';
import { useNavigate } from 'react-router-dom';

const TradeList: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: trades,
    isLoading,
    error,
  } = useQuery<TradeType[]>('trades', () => fetchTrades());

  if (isLoading) {
    return <Loading />;
  }

  if (error) navigate('/error');

  return (
    <div className="pb-22 w-full h-full mt-4 flex flex-col gap-6">
      {trades?.map((trade) => (
        <TradeCardDetails key={trade.id} trade={trade} />
      ))}
    </div>
  );
};

export default TradeList;
