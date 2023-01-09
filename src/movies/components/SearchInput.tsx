import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}
export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChange(value);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search for a movie"
        id="search"
        name="search"
        type="search"
        value={value}
        onChange={handleOnChange}
      />
      <SearchIcon className="search-icon" />
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  border: '1px solid #BEBDBD',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 8,
  paddingRight: 8,
  borderRadius: 4,
  width: '100%',
  maxWidth: 210,

  '& .search-icon': {
    cursor: 'text',
    width: 20,
    height: 20,
  },

  '@media screen and (min-width: 768px)': {
    maxWidth: 310,
  },
});

const Input = styled('input')({
  border: 'none',
  outline: 'none',
  width: '100%',
});
