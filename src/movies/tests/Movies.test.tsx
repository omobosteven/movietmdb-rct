import React from 'react';
import {
  screen,
  renderWithRoute,
  waitForElementToBeRemoved,
  waitFor,
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

    await waitForElementToBeRemoved(await screen.findByRole('progressbar'));

    const movieItems: HTMLLIElement[] = await screen.findAllByRole('listitem');
    const title1 = within(movieItems[0]).getByRole('heading');
    const title2 = within(movieItems[1]).getByRole('heading');

    expect(movieItems).toHaveLength(2);
    expect(title1).toHaveTextContent('a good');
    expect(title2).toHaveTextContent('a show');

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'a great');

    await waitFor(() => expect(title1).not.toBeInTheDocument());

    const movieSearchItems: HTMLLIElement[] = await screen.findAllByRole(
      'listitem'
    );
    const titleSearch1 = screen.getByRole('heading', {
      name: /a great/i,
    });
    const titleSearch2 = screen.queryByRole('heading', {
      name: /a show/i,
    });

    expect(movieSearchItems).toHaveLength(1);
    expect(titleSearch1).toBeInTheDocument();
    expect(titleSearch1).toHaveTextContent('a great');
    expect(titleSearch2).not.toBeInTheDocument();
  });
});
