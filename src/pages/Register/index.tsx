import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { useMutation } from 'react-query';
import registerGeekImage from '@assets/register_geek.png';
import { InputField, Button, Title } from '@components/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { validationSchemaRegister } from '@utils/validationSchemas';
import { register, login } from '@services/index';

interface DataFormField {
  label: string;
  type: string;
  name: string;
  value: string;
  errorMessage: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const registerMutation = useMutation((userData: any) => register({
    email: userData.email,
    name: userData.name,
    password: userData.password
  }));

  const loginMutation = useMutation((loginData: any) => login(loginData));

  const onSubmit = (values: FormikValues) => {
    registerMutation.mutate(values, {
      onSuccess: () => {
        loginMutation.mutate(
          { email: values.email, password: values.password },
          {
            onSuccess: (response) => {
              localStorage.setItem('token', response.data.token);
              toast.success('Registration and login done with success!');
              formik.resetForm();
              navigate('/dashboard');
            },
            onError: (error) => {
              console.error('Error logging in user', error);
              toast.error('An error occurred while logging in.');
            },
          },
        );
      },
      onError: (error) => {
        console.error('Error registering user', error);
        toast.error('An error occurred while registering.');
      },
    });
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isOldEnough: false,
    },
    validationSchema: validationSchemaRegister,
    onSubmit,
  });

  const dataForm: DataFormField[] = [
    {
      label: 'Nome',
      type: 'text',
      name: 'name',
      value: formik.values.name,
      errorMessage:
        formik.touched.name && formik.errors.name ? formik.errors.name : '',
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      value: formik.values.email,
      errorMessage:
        formik.touched.email && formik.errors.email ? formik.errors.email : '',
    },
    {
      label: 'Senha',
      type: 'password',
      name: 'password',
      value: formik.values.password,
      errorMessage:
        formik.touched.password && formik.errors.password
          ? formik.errors.password
          : '',
    },
    {
      label: 'Confirme a senha',
      type: 'password',
      name: 'confirmPassword',
      value: formik.values.confirmPassword,
      errorMessage:
        formik.touched.confirmPassword && formik.errors.confirmPassword
          ? formik.errors.confirmPassword
          : '',
    },
  ];

  const verifyIsLoading = registerMutation.isLoading || loginMutation.isLoading;

  return (
    <div className="relative flex h-full w-full justify-between bg-[#111118] dark overflow-x-hidden">
      <div className="w-full flex justify-end flex-grow">
        <div className="flex h-screen overflow-hidden w-full pb-12">
          <div className="flex flex-col flex-1 overflow-y-auto w-full p-8 ">
            <div className="p-8 pb-0">
              <Title text={'Welcome to Yu-Gi-Oh'} />
              <p className="pb-4 text-gray-400">
                Sign up for free to start trading and collecting cards
              </p>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4 text-white p-8"
            >
              {dataForm.map(({ label, type, name, value, errorMessage }, i) => (
                <InputField
                  key={i}
                  label={label}
                  type={type}
                  name={name}
                  value={value}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorMessage={errorMessage}
                />
              ))}

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formik.values.isOldEnough}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="isOldEnough"
                  className="form-checkbox rounded bg-[#111118] border-none text-blue-500 focus:outline-none focus:ring-0 focus:border-[#3c3c53]"
                />
                I am at least 18 years old
                {formik.touched.isOldEnough && formik.errors.isOldEnough && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.isOldEnough}
                  </div>
                )}
              </label>
              <Button
                type="submit"
                disabled={verifyIsLoading}
                isLoading={verifyIsLoading}
              >
                Sign Up
              </Button>
              <button
                type="button"
                className="text-[#E5E8EB] p-2 rounded w-full"
                onClick={() => navigate('/login')}
              >
                Already have an account? Log-in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="sm:h-full w-full max-w-[48vw] flex items-end justify-end flex-grow">
        <img
          src={registerGeekImage}
          alt=""
          className="h-full object-cover flex flex-grow"
        />
      </div>
    </div>
  );
};

export default Register;
