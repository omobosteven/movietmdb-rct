import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './error/Error';
import { Spinner } from './common/Spinner';

const Movies = React.lazy(() => import('./movies/pages/Movies'));
const MovieDetails = React.lazy(() => import('./movies/pages/MovieDetails'));
export const routes = [
  {
    path: '/',
    element: <Movies />,
    errorElement: <Error />,
  },
  {
    path: 'movies/:movieId',
    element: <MovieDetails />,
  },
];

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
