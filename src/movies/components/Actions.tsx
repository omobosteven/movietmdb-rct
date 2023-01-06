import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/Button';
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
      <Button>Sort &uarr;</Button>
      <SearchInput value={search} onChange={onSearchChange} />
    </ActionItems>
  );
};

const ActionItems = styled('section')({
  marginTop: 20,
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: 32,
});
