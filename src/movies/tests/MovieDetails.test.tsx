import React from 'react';
import {
  renderWithRoute,
  screen,
} from '../../test-utils/testing-library-utils';

describe('<MoviesDetails />', () => {
  test('moviesDetails component renders correctly', async () => {
    renderWithRoute({ route: '/movies/1' });

    const title = await screen.findByRole('heading', { name: /a good/i });
    const homepage: HTMLAnchorElement = screen.getByRole('link', {
      name: /website/i,
    });
    const descriptions = screen.getAllByText(/lorem some text here now/i);

    expect(title).toBeInTheDocument();
    expect(homepage.href).toContain('https://movie.com');
    expect(homepage.textContent).toEqual('Website');
    expect(descriptions).toHaveLength(2);
  });
});
