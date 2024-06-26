import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { SelectField, Title, Button, Loading } from '@components/index';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardType } from 'types';
import { createTrade, fetchAllCards, fetchUserCards } from '@services/index';
import { validationSchemaCreateTrade } from '@utils/validationSchemas';
import { useNavigate } from 'react-router-dom';

interface Props {
  onFinish: () => void;
  deleteIsLoading?: boolean;
}

const CreateTrade: React.FC<Props> = ({ onFinish, deleteIsLoading }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: userCards,
    isLoading: userCardsLoading,
    error: userCardsError,
  } = useQuery('userCards', fetchUserCards);

  const {
    data: allCardsData,
    isLoading: allCardsLoading,
    error: allCardsError,
  } = useQuery('allCards', fetchAllCards);

  const allCards: CardType[] = allCardsData?.list || [];

  const mutation = useMutation(createTrade, {
    onSuccess: () => {
      queryClient.invalidateQueries('allTrades');
      toast.success('Your exchange request was created successfully!');
      formik.resetForm();
      if (onFinish) onFinish();
    },
    onError: (error) => {
      console.error('Error creating trade:', error);
      toast.error('Error creating your exchange request!');
    },
  });

  const onSubmit = (values: FormikValues) => {
    mutation.mutate({
      cards: [
        { cardId: values.offeringCardId.value, type: 'OFFERING' },
        { cardId: values.receivingCardId.value, type: 'RECEIVING' },
      ],
    });
  };

  const formik = useFormik({
    initialValues: {
      offeringCardId: { label: '', value: '' },
      receivingCardId: { label: '', value: '' },
    },
    validationSchema: validationSchemaCreateTrade,
    onSubmit,
  });

  const formattedOptions = (options: CardType[]) => {
    return options.map((card) => ({ label: card.name, value: card.id }));
  };

  if (userCardsLoading || allCardsLoading) {
    return <Loading />;
  }

  if (userCardsError || allCardsError) {
    navigate('/error');
  }

  return (
    <div className="w-full flex">
      <form
        onSubmit={formik.handleSubmit}
        className="h-full w-full flex flex-col gap-4"
      >
        <Title text={'Create a Trade'} />
        <SelectField
          label="Offering Card"
          options={formattedOptions(userCards)}
          value={formik.values.offeringCardId}
          onChange={(value) => formik.setFieldValue('offeringCardId', value)}
          placeholder={'Selecione uma de suas cartas'}
          name={'offeringCardId'}
          errorMessage={
            formik.errors.offeringCardId?.label ||
            formik.errors.offeringCardId?.value ||
            formik.errors.offeringCardId
          }
        />

        <SelectField
          label="Receiving Card"
          options={formattedOptions(allCards)}
          value={formik.values.receivingCardId}
          onChange={(value) => formik.setFieldValue('receivingCardId', value)}
          placeholder={'Selecione a carta desejada'}
          name={'receivingCardId'}
          errorMessage={
            formik.errors.receivingCardId?.label ||
            formik.errors.receivingCardId?.value ||
            formik.errors.receivingCardId
          }
        />

        <div className="w-full flex justify-end">
          <Button
            type="submit"
            isLoading={deleteIsLoading}
            disabled={deleteIsLoading}
          >
            Create Trade
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTrade;
