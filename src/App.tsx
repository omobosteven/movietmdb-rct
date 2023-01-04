import React from 'react';
import { Movies } from './movies/pages/Movies';
import { MovieDetails } from './movies/pages/MovieDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Movies />,
    errorElement: <Error />,
  },
  {
    path: 'movies/:movieId',
    element: <MovieDetails />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
