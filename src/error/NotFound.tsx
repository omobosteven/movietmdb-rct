import React from 'react';

interface NotFoundProps {
  statusCode: number;
  errorMessage: string;
}
const NotFound = ({ statusCode, errorMessage }: NotFoundProps) => {
  return (
    <>
      <p>Page Not Found</p>
      <p>
        {statusCode} | {errorMessage}
      </p>
    </>
  );
};

export default NotFound;
