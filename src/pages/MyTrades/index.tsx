import React, { Suspense, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  Loading,
  Title,
  TradeCardDetails,
  Button,
  Modal,
} from '@components/index';
import { TradeType } from 'types';
import CreateTrade from './CreateTrade';
import { deleteTrade, fetchAllTrades, fetchUserProfile } from '@services/index';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyTrades: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const {
    data: user,
    isLoading: loadingUserProfile,
    error: errorUSerProfile,
  } = useQuery('userProfile', fetchUserProfile);

  const {
    data: allTrades,
    isLoading: loadingAllTrades,
    error,
  } = useQuery('allTrades', fetchAllTrades);

  const userTrades: TradeType[] =
    allTrades &&
    allTrades.filter((trade: TradeType) => user && trade.userId === user.id);

  const handleDelete = (tradeId: string) => {
    mutation.mutate(tradeId);
  };

  const mutation = useMutation(deleteTrade, {
    onSuccess: () => {
      queryClient.invalidateQueries('allTrades');
      toast.success('Successful deleted trade!');
    },
  });

  if (mutation.isLoading || loadingAllTrades) <Loading />;

  if (error || errorUSerProfile) navigate('/error');

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-screen overflow-hidden w-full pb-16">
        <div className="flex flex-col flex-1 overflow-y-auto w-full p-8">
          <div className="flex items-baseline justify-between pb-4 w-full">
            <Title text={'My Trades'} />
            <Button
              className="animate-pulse"
              onClick={() => setIsVisibleModal(!isVisibleModal)}
            >
              New Trade
            </Button>
          </div>

          {(loadingAllTrades || loadingUserProfile) && <Loading />}
          {userTrades && userTrades.length > 0 ? (
            <div className="flex justify-center flex-col gap-4">
              {userTrades.map((trade) => (
                <TradeCardDetails
                  key={trade.id}
                  trade={trade}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div>
              <p className="text-white">
                You do not have any exchange requests.
              </p>
            </div>
          )}

          <Modal
            isOpen={isVisibleModal}
            onClose={() => setIsVisibleModal(!isVisibleModal)}
          >
            <CreateTrade
              onFinish={() => setIsVisibleModal(false)}
              deleteIsLoading={mutation.isLoading}
            />
          </Modal>
        </div>
      </div>
    </Suspense>
  );
};

export default MyTrades;
