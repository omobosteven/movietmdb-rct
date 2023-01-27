import { render, RenderOptions } from '@testing-library/react';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import React, { Suspense } from 'react';
import { routes } from '../App';
import { Spinner } from '../common/Spinner';

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

  return render(
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );

  // return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

export * from '@testing-library/react';
export { renderWithRouter, renderWithRoute };
