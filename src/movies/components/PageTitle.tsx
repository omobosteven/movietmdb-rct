import React from 'react';
import styled from 'styled-components';

interface PageTitleProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}
export const PageTitle = ({ children, className }: PageTitleProps) => {
  return <Title className={className}>{children}</Title>;
};

const Title = styled('h1')({
  marginBottom: 24,
  fontWeight: 400,
  color: '#010101',
});
