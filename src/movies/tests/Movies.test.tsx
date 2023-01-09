import React from 'react';
import {
  screen,
  renderWithRoute,
} from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

describe('<Movies />', () => {
  test('movies component renders correctly', async () => {
    renderWithRoute();

    const movieItems = await screen.findAllByRole('listitem');
    const title1 = screen.getByRole('heading', { name: /a good/i });
    const title2 = screen.getByRole('heading', { name: /a show/i });

    expect(movieItems).toHaveLength(2);
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  test('search movies returns correct result', async () => {
    renderWithRoute();

    const movieItems = await screen.findAllByRole('listitem');
    const title1 = screen.getByRole('heading', { name: /a good/i });
    const title2 = screen.getByRole('heading', { name: /a show/i });

    expect(movieItems).toHaveLength(2);
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'a show');

    const movieSearchItems = await screen.findAllByRole('listitem');
    const titleSearch1 = screen.queryByRole('heading', { name: /a good/i });
    const titleSearch2 = screen.queryByRole('heading', { name: /a show/i });

    expect(movieSearchItems).toHaveLength(1);
    expect(titleSearch1).not.toBeInTheDocument();
    expect(titleSearch2).toBeInTheDocument();
  });
});
