import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../utils/pxToRem';

interface ErrorProps {
  message: string | null;
}
export const Error = ({ message }: ErrorProps) => {
  return (
    <StyledError role="alert">
      Error: {message ? message : 'Something went wrong'}
    </StyledError>
  );
};

const StyledError = styled('p')({
  margin: '80px auto 0',
  fontSize: pxToRem(20),
  color: '#8d8d8d',
  textAlign: 'center',
});
