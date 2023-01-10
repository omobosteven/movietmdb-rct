import React from 'react';
import { Movie as MovieType } from '../../movies.services';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { useNavigate } from 'react-router-dom';
import { StarRating } from '../StarRating';

interface MoviesProps {
  movies: MovieType[] | null;
}

export const MovieList = ({ movies }: MoviesProps) => {
  const navigate = useNavigate();
  const handleNavigateToMovie = (id: number) => {
    navigate(`movies/${id}`);
  };

  return (
    <Movies>
      {movies ? (
        <>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                onClick={() => handleNavigateToMovie(movie.id)}
              >
                <img src={movie.poster} alt={movie.title} className="img" />
                <StarRating rating={movie.rating} />
                <h2 className="title">{movie.title}</h2>
              </Movie>
            );
          })}
        </>
      ) : (
        <div className="empty-movies">No movies</div>
      )}
    </Movies>
  );
};

const Movies = styled('ul')({
  marginTop: 42,
  listStyle: 'none',
  paddingLeft: 0,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto',
  rowGap: 32,
  columnGap: 32,

  '& .empty-movies': {
    margin: 'auto',
    marginTop: 60,
    fontSize: pxToRem(20),
    color: '#8d8d8d',
  },

  '@media screen and (min-width: 375px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media screen and (min-width: 600px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@media screen and (min-width: 900px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  '@media screen and (min-width: 1200px)': {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },

  '@media screen and (min-width: 1440px)': {
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
});

const Movie = styled('li')({
  '& .img': {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  },

  '& .title': {
    fontSize: pxToRem(16),
    marginTop: 8,
    cursor: 'pointer',

    '&:hover': {
      color: '#01B4E4',
      fontWeight: 500,
    },
  },
});
