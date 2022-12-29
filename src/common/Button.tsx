import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled('button')({
  borderRadius: 4,
  border: '1px solid transparent',
  padding: '0.4em 0.5em',
  fontSize: '1rem',
  fontFamily: 'inherit',
  backgroundColor: '#d8d8d8',
  cursor: 'pointer',
  transition: 'border-color 0.25s',
  color: '#fcfcfc',
});
