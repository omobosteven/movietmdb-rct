import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../common/Button';
import { SearchInput } from './SearchInput';

// &uarr; arrow up
// &darr; arrow down

interface ActionsProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const Actions = ({ search, onSearchChange }: ActionsProps) => {
  return (
    <ActionItems>
      <Button className="sort-btn">Sort &uarr;</Button>
      <SearchInput value={search} onChange={onSearchChange} className="input" />
    </ActionItems>
  );
};

const ActionItems = styled('div')({
  marginTop: 20,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  columnGap: 32,
  rowGap: 16,

  '& .sort-btn': {
    width: '100%',
    maxWidth: 90,
  },

  '& .input': {
    width: '100%',

    '@media screen and (min-width: 768px)': {
      maxWidth: 320,
    },
  },
});
