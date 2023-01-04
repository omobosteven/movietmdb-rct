import React from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorOptions {
  status?: number;
  statusText?: string;
  message: string;
}
export const Error = () => {
  const error = useRouteError() as ErrorOptions;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.status && (
        <p>
          {error.status} | {error.statusText || error.message}
        </p>
      )}
    </div>
  );
};
