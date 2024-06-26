import React from 'react';
import { useQuery } from 'react-query';
import { Card, Loading, Title, Button } from '@components/index';
import { CardType } from 'types';
import { fetchAllCards } from '@services/cardService';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useQuery('allCards', fetchAllCards);
  const navigate = useNavigate();

  if (isLoading) {
    <Loading />;
  }

  if (error) navigate('/error');

  console.log('Dta', data && data?.list);
  return (
    <div className="flex h-screen overflow-hidden w-full pb-12">
      <div className="flex flex-col flex-1 overflow-y-auto w-full p-8 ">
        <div className="flex justify-between items-baseline">
          <Title text={'Dashboard'} />
          <div className="flex space-x-4 mt-4 items-baseline">
            <Button
              className={`py-2 px-4 rounded `}
              onClick={() => navigate('/my-cards')}
            >
              My Cards
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {data &&
            data?.list.map((card: CardType) => (
              <Card card={card} key={card.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
