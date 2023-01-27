import {
  renderWithRoute,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('<Movies />', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should render movies component correctly', async () => {
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

  test('should search movies and return correct result', async () => {
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

    await waitFor(() => expect(title2).not.toBeInTheDocument());

    const movieSearchItems: HTMLLIElement[] = await screen.findAllByRole(
      'listitem'
    );
    expect(movieSearchItems).toHaveLength(1);
    const titleSearch1 = screen.getByRole('heading', {
      name: /a great/i,
    });
    expect(titleSearch1).toBeInTheDocument();
  });

  test('should return error if request fails', async () => {
    server.resetHandlers(
      rest.get(
        'https://api.themoviedb.org/3/discover/movie',
        (req, res, ctx) => {
          return res(
            ctx.status(422),
            ctx.json({
              errors: ['page must be less than or equal to 500'],
              success: false,
            })
          );
        }
      )
    );

    renderWithRoute();

    const spinner = await screen.findByRole('progressbar');
    expect(spinner).toBeInTheDocument();

    await waitForElementToBeRemoved(spinner);
    expect(spinner).not.toBeInTheDocument();

    const errorElement = screen.getByRole('alert');

    expect(errorElement).toHaveTextContent(
      'Error: Request failed with status code 422'
    );
  });
});
