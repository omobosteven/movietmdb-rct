import React from 'react';
import { Movie } from '../home.services';
import { Rating, ThinStar } from '@smastrom/react-rating';
import styled from 'styled-components';

interface MoviesProps {
  movies: Movie[] | null;
}

const ratingStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#878787',
  inactiveFillColor: '#cbcbcb',
};

export const Movies = ({ movies }: MoviesProps) => {
  return (
    <MovieList>
      {movies?.map((movie) => {
        return (
          <MovieItem key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="img" />
            <StarRating
              value={movie.rating}
              readOnly
              itemStyles={ratingStyles}
            />
            <h2 className="title">{movie.title}</h2>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

const MovieList = styled('ul')({
  listStyle: 'none',
  paddingLeft: 0,
  outline: '1px solid green',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 52,

  '@media screen and (min-width: 768px)': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '2%',
  },
});

const MovieItem = styled('li')({
  outline: '1px solid red',
  flexBasis: '16%',
});

const StarRating = styled(Rating)({
  width: '50%',
});

// TODO: implement star rating component
