import React from 'react';
import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';
import NotFound from './NotFound';
import styled from 'styled-components';

interface ErrorOptions {
  status?: number;
  statusText?: string;
}
export const Error = () => {
  const error = useRouteError() as ErrorOptions;

  const defaultErrorMessage =
    import.meta.env.NODE_ENV !== 'production'
      ? `UnexpectedError: ${error.statusText || 'Something went wrong'}`
      : 'Sorry, an unexpected error has occurred.';

  let ErrorDisplay = <p>{defaultErrorMessage}</p>;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      ErrorDisplay = (
        <NotFound
          statusCode={error.status}
          errorMessage={error.statusText || 'Page not Found'}
        />
      );
    }
  }

  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      {ErrorDisplay}
      <Link to="/">Go Home</Link>
    </ErrorContainer>
  );
};

const ErrorContainer = styled('div')({
  textAlign: 'center',
  marginTop: 80,
});
