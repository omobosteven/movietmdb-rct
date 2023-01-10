import React from 'react';
import {
  renderWithRouter,
  screen,
  within,
} from '../../test-utils/testing-library-utils';
import { MovieList } from '../components/movies/MovieList';
import * as router from 'react-router';
import userEvent from '@testing-library/user-event';

describe('<MovieList />', () => {
  test('renders correct number of movies', () => {
    renderWithRouter(<MovieList movies={movies} />);

    const movieList = screen.getAllByRole('listitem');
    const movieGood = screen.getByRole('heading', { name: /a good/i });
    const movieShow = screen.getByRole('heading', { name: /a show/i });

    expect(movieList).toHaveLength(2);
    expect(movieGood).toBeInTheDocument();
    expect(movieShow).toBeInTheDocument();
  });

  test('can navigate to movie details page', async () => {
    const navigate = vi.fn();
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

    renderWithRouter(<MovieList movies={movies} />);

    const movieList = screen.getByRole('list');
    const movieGood = within(movieList).getByRole('img', { name: /a good/i });

    await userEvent.click(movieGood);

    expect(navigate).toHaveBeenCalledWith('movies/1');
  });
});

const movies = [
  {
    id: 1,
    title: 'a good',
    poster: '/image.jpg',
    rating: 2.5,
  },
  {
    id: 2,
    title: 'a show',
    poster: '/image-show.jpg',
    rating: 3.5,
  },
];
