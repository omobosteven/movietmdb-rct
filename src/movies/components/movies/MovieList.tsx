import React from 'react';
import { Movie as MovieType } from '../../movies.types';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { MovieCard } from './MovieCard';

interface MoviesProps {
  movies: MovieType[] | null;
}

export const MovieList = ({ movies }: MoviesProps) => {
  return (
    <Movies>
      {movies ? (
        <>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
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
  gridTemplateColumns: `repeat(auto-fit, minmax(${pxToRem(160)}, 1fr))`,
  gap: `${pxToRem(32)} ${pxToRem(16)}`,

  '& .empty-movies': {
    margin: 'auto',
    marginTop: 60,
    fontSize: pxToRem(20),
    color: '#8d8d8d',
  },

  '@media screen and (min-width: 700px)': {
    gridTemplateColumns: `repeat(auto-fit, minmax(${pxToRem(200)}, 1fr))`,
  },

  '@media screen and (min-width: 1440px)': {
    gridTemplateColumns: `repeat(auto-fit, minmax(${pxToRem(235)}, 1fr))`,
  },
});
