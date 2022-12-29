import React from 'react';
import styled from 'styled-components';

export const Banner = () => {
  return (
    <Header>
      <h1 className="title">Movies DB</h1>
      <h3 className="sub-title">Yet another movies database.</h3>
    </Header>
  );
};

const Header = styled('header')({
  backgroundColor: '#ebebeb',
  padding: '37px 0 50px',

  '& .title': {
    marginBottom: 24,
    fontWeight: 400,
    color: '#010101',
  },

  '& .sub-title': {
    fontWeight: 400,
    color: '#8d8d8d',
  },
});
