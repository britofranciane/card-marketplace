import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  name: string;
  onBlur?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  errorMessage = '',
  name,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label className="flex flex-col w-full">
      <p className="text-white text-base font-medium leading-normal pb-2">
        {label}
      </p>
      <div className="relative">
        <input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input mt-1 px-3 py-2 rounded-xl bg-[#1c1c26] text-white focus:outline-none focus:ring-0 border border-[#3c3c53] focus:border-[#3c3c53] h-14 placeholder:text-[#9d9db8] text-base font-normal leading-normal w-full pr-10"
          name={name}
          onBlur={onBlur}
        />
        {type === 'password' && (
          <button
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 focus:outline-none"
            type={'button'}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        )}
      </div>
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </label>
  );
};

export default InputField;
