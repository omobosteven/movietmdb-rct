import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/Button';
import { SearchInput } from './SearchInput';

// &uarr; arrow up
// &darr; arrow down
export const Actions = () => {
  return (
    <ActionItems>
      <Button>Sort &uarr;</Button>
      <SearchInput />
    </ActionItems>
  );
};

const ActionItems = styled('section')({
  marginTop: 20,
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: 32,
});
