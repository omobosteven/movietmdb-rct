import React from 'react';
import {
  screen,
  renderWithRoute,
  waitForElementToBeRemoved,
  within,
} from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

describe('<Movies />', () => {
  test('movies component renders correctly', async () => {
    renderWithRoute();

    const spinner = await screen.findByRole('progressbar');
    expect(spinner).toBeInTheDocument();

    await waitForElementToBeRemoved(spinner);
    expect(spinner).not.toBeInTheDocument();

    const movieItems: HTMLLIElement[] = await screen.findAllByRole('listitem');
    const title1 = within(movieItems[0]).getByRole('heading');
    const title2 = within(movieItems[1]).getByRole('heading');

    expect(movieItems).toHaveLength(2);
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title1).toHaveTextContent('a good');
    expect(title2).toHaveTextContent('a show');
  });

  test('search movies returns correct result', async () => {
    renderWithRoute();

    const movieItems: HTMLLIElement[] = await screen.findAllByRole('listitem');
    const title1 = within(movieItems[0]).getByRole('heading');
    const title2 = within(movieItems[1]).getByRole('heading');

    expect(movieItems).toHaveLength(2);
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'a show');

    const movieSearchItems = await screen.findByRole('list');
    const titleSearch1 = within(movieSearchItems).queryByRole('heading', {
      name: /a good/i,
    });
    const titleSearch2 = within(movieSearchItems).queryByRole('heading');

    expect(await screen.findAllByRole('listitem')).toHaveLength(1);
    expect(titleSearch1).not.toBeInTheDocument();
    expect(titleSearch2).toBeInTheDocument();
    expect(titleSearch2).toHaveTextContent('a show');
  });
});
