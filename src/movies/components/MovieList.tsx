import React from 'react';
import { Movie as MovieType } from '../movies.services';
import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import { useNavigate } from 'react-router-dom';
import { StarRating } from './StarRating';

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
      {movies?.map((movie) => {
        return (
          <Movie key={movie.id} onClick={() => handleNavigateToMovie(movie.id)}>
            <img src={movie.poster} alt={movie.title} className="img" />
            <StarRating rating={movie.rating} />
            <h2 className="title">{movie.title}</h2>
          </Movie>
        );
      })}
    </Movies>
  );
};

const Movies = styled('ul')({
  marginTop: 42,
  listStyle: 'none',
  paddingLeft: 0,
  display: 'flex',
  rowGap: 32,
  flexWrap: 'wrap',
  columnGap: '10%',

  '@media screen and (min-width: 768px)': {
    columnGap: '5%',
  },

  '@media screen and (min-width: 1280px)': {
    columnGap: '2.5%',
  },
});

const Movie = styled('li')({
  flexBasis: '45%',

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
      color: 'rgb(1, 180, 228)',
      fontWeight: 500,
    },
  },

  '@media screen and (min-width: 768px)': {
    flexBasis: '30%',
  },

  '@media screen and (min-width: 1280px)': {
    flexBasis: '18%',
  },
});
