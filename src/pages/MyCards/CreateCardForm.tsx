import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { Title, Button, SelectField, Loading } from '@components/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { CardType, OptionType } from 'types';
import { fetchAllCards, addCardToUser } from '@services/cardService';
import { validationSchemaAddCard } from '@utils/validationSchemas';

interface Props {
  onFinish?: () => void;
}

const CreateCardForm: React.FC<Props> = ({ onFinish }) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery('allCards', fetchAllCards);

  isLoading && <Loading />;

  const mutation = useMutation(addCardToUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('userCards');
      toast.success('Successful added letter!');
      onFinish && onFinish();
    },
    onError: (error) => {
      console.error('Error adding letter:', error);
      toast.error('Error adding letter. Check the fields and try again.');
    },
  });

  const onSubmit = async (values: FormikValues) => {
    mutation.mutate({ cardIds: [values.name.value] });
  };

  const formik = useFormik({
    initialValues: {
      name: { label: '', value: '' },
    },
    validationSchema: validationSchemaAddCard,
    onSubmit,
  });

  const formattedListCards: OptionType[] =
    data &&
    data.list.map((card: CardType) => ({ label: card.name, value: card.id }));

  return (
    <div className="layout-content-container flex flex-col w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-4"
      >
        <Title text={'Add Card'} />
        <p className="text-[#93adc8] text-sm font-normal leading-normal">
          Add a new letter to your collection.
        </p>

        <SelectField
          label={'Name'}
          options={formattedListCards}
          name={'name'}
          value={formik.values.name}
          onChange={(value) => formik.setFieldValue('name', value)}
          errorMessage={formik.touched.name && formik.errors.name}
        />

        <Button type="submit">
          <span className="truncate">To send</span>
        </Button>
      </form>
    </div>
  );
};

export default CreateCardForm;
