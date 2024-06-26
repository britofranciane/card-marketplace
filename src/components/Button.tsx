import React from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  type = 'button',
  className = '',
  disabled = false,
  onClick,
  isLoading = false,
  children,
}) => {
  return (
    <button
      type={type}
      className={`mt-4 py-2 px-4 rounded-md bg-[#1A1AE5] text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
