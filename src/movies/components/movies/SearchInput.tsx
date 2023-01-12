import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { DebounceInput } from 'react-debounce-input';

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}
export const SearchInput = ({ value, onChange, ...rest }: SearchInputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
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
      debounceTimeout={500}
      {...rest}
    />
  );
};

const Input = styled(DebounceInput)({
  border: '1px solid #BEBDBD',
  outline: 'none',
  width: '100%',
  background: 'transparent',
  borderRadius: 4,
  padding: '8px 12px',
  fontSize: pxToRem(14),
});
