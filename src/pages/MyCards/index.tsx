import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Card, Loading, Modal, Title } from '@components/index';
import CreateCardForm from './CreateCardForm';
import { fetchUserCards } from '@services/cardService';
import { CardType } from 'types';
import { useNavigate } from 'react-router-dom';

const MyCards: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery('userCards', fetchUserCards);

  const onFinishCreateCard = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  if (isLoading) <Loading />;

  if (error) navigate('/error');

  return (
    <div className="flex h-screen overflow-hidden w-full pb-12">
      <div className="flex flex-col flex-1 overflow-y-auto w-full p-8 ">
        <div className="flex items-center justify-between w-full">
          <Title text={'My Cards'} />
          <div className="flex items-center justify-center gap-4">
            <Button
              className={`py-2 px-4 rounded`}
              onClick={() => navigate('/dashboard')}
            >
              All Cards
            </Button>
            <Button
              className="animate-pulse"
              onClick={() => setIsVisibleModal(!isVisibleModal)}
            >
              New Card
            </Button>
          </div>
        </div>

        {data && data.length === 0 && (
          <div className="mt-4 text-white text-base font-medium">
            Looks like you have no letter yet. How about adding a now?
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {data &&
            data.map((card: CardType) => <Card card={card} key={card.id} />)}
        </div>

        <Modal
          isOpen={isVisibleModal}
          onClose={() => setIsVisibleModal(!isVisibleModal)}
        >
          <CreateCardForm onFinish={onFinishCreateCard} />
        </Modal>
      </div>
    </div>
  );
};

export default MyCards;
