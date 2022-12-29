import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
}
export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <Wrapper>
      <Input
        placeholder="Search for a movie"
        type="search"
        value={value}
        onChange={onChange}
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

  '& .search-icon': {
    cursor: 'text',
    width: 20,
    height: 20,
  },
});

const Input = styled('input')({
  border: 'none',
  outline: 'none',
});
