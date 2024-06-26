import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, InputField, Title } from '@components/index';
import registerGeekImage from '@assets/register_geek.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validationSchemaLogin } from '@utils/validationSchemas';
import { useMutation } from 'react-query';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation(
    async (values: { email: string; password: string }) => {
      const response = await axios.post(
        'https://cards-marketplace-api.onrender.com/login',
        values,
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        toast.success('Login successful!');
        navigate('/');
      },
      onError: (error) => {
        console.error('Error logging in', error);
        toast.error('Unable to Login!');
      },
    },
  );

  const onSubmit = async (values: FormikValues) => {
    loginMutation.mutate(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit,
  });

  const formData: {
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
  }[] = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      errorMessage: 'teste',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      errorMessage: 'teste',
    },
  ];

  return (
    <div
      className="flex h-full w-full justify-between bg-[#111118] dark overflow-x-hidden gap-4"
      style={{ height: 'calc(100vh - 65px)' }}
    >
      <div className="flex w-full justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="overflow-x-hidden gap-4 w-full max-w-[700px] flex justify-center flex-col p-4 box-border"
        >
          <Title text={'Login'} />
          {formData.map(({ placeholder, type, name }, i) => (
            <InputField
              key={i}
              label={placeholder}
              type={type}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors[name]}
            />
          ))}

          <Button
            type="submit"
            className="w-full"
            // disabled={isLoading}
            // isLoading={isLoading}
          >
            Log in
          </Button>
          <button
            type="button"
            className="text-[#E5E8EB] p-2 rounded w-full"
            onClick={() => navigate('/register')}
          >
            Cadastre-se
          </button>
        </form>
      </div>

      <div
        className="sm:h-full w-full max-w-[48vw] flex items-end justify-end"
        style={{}}
      >
        <img
          src={registerGeekImage}
          alt=""
          className="h-full object-cover flex flex-grow"
        />
      </div>
    </div>
  );
};

export default Login;
