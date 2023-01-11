import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}
export const SearchInput = ({ value, onChange, ...rest }: SearchInputProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChange(value);
  };

  return (
    <Input
      placeholder="Search for a movie"
      id="search"
      name="search"
      type="search"
      value={value}
      onChange={handleOnChange}
      {...rest}
    />
  );
};

const Input = styled('input')({
  border: '1px solid #BEBDBD',
  outline: 'none',
  width: '100%',
  background: 'transparent',
  borderRadius: 4,
  padding: '8px 12px',
  fontSize: pxToRem(14),
});
