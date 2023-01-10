import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Spinner = () => {
  return <StyledSpinner className="spinner" role="progressbar" />;
};

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% {transform: rotate(360deg) }
`;

const SpinAnimation = styled.div`
  animation: ${spin} 1s linear infinite;
`;

const StyledSpinner = styled(SpinAnimation)({
  border: '5px solid #EBEBEB',
  borderTop: '5px solid #010101',
  borderRadius: '50%',
  marginLeft: -25,
  width: 50,
  height: 50,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
