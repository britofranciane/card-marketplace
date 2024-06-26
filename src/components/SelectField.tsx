import React from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { components } from 'react-select';
import { HiChevronDown } from 'react-icons/hi';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: Option[];
  value: Option;
  onChange: (
    newValue: SingleValue<Option>,
    actionMeta: ActionMeta<Option>,
  ) => void;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string | React.ReactNode;
  name: string;
  onBlur?: () => void;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#1c1c26',
    borderColor: '#3c3c53',
    borderRadius: '0.75rem',
    padding: '0.375rem',
    color: 'white',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#3c3c53',
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: '#1c1c26',
    borderRadius: '0.75rem',
    marginTop: '0.25rem',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#3c3c53'
      : state.isFocused
        ? '#2b2b39'
        : '#1c1c26',
    color: 'white',
    '&:hover': {
      backgroundColor: '#2b2b39',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#9d9db8',
  }),
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <HiChevronDown className="w-5 h-5 text-gray-400" />
    </components.DropdownIndicator>
  );
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = '',
  required = false,
  errorMessage = '',
  name,
  onBlur,
}) => {
  return (
    <label className="flex flex-col w-full">
      <p className="text-white text-base font-medium leading-normal pb-2">
        {label}
      </p>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        styles={customStyles}
        components={{ DropdownIndicator }}
        placeholder={placeholder}
        classNamePrefix="react-select"
        name={name}
        onBlur={onBlur}
      />
      {errorMessage && (
        <div className="text-red-500 text-sm p-2">{errorMessage}</div>
      )}
    </label>
  );
};

export default SelectField;
