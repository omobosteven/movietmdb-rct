import React from 'react';
import { Movies } from './movies/pages/Movies';
import { MovieDetails } from './movies/pages/MovieDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './error/Error';

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
  return <RouterProvider router={router} />;
};
