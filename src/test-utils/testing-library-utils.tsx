import { render, RenderOptions } from '@testing-library/react';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import { routes } from '../App';

const renderWithRouter = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: BrowserRouter, ...options });
};

const renderWithRoute = ({ route = '/' } = {}) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [route],
  });

  return render(<RouterProvider router={router} />);

  // return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

export * from '@testing-library/react';
export { renderWithRouter, renderWithRoute };
