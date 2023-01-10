import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../PageTitle';

export const Banner = () => {
  return (
    <Header>
      <PageTitle>Movies DB</PageTitle>
      <h3 className="sub-title">Movies database</h3>
    </Header>
  );
};

const Header = styled('header')({
  backgroundColor: '#ebebeb',
  padding: '37px 5% 50px',

  '& .sub-title': {
    fontWeight: 400,
    color: '#8d8d8d',
  },
});
