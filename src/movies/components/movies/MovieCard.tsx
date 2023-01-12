import React from 'react';
import { Movie as MovieType } from '../../movies.types';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import { StarRating } from '../StarRating';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  movie: MovieType;
}
export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  const handleNavigateToMovie = (id: number) => {
    navigate(`movies/${id}`);
  };

  return (
    <Movie key={movie.id} onClick={() => handleNavigateToMovie(movie.id)}>
      <img src={movie.poster} alt={movie.title} className="img" />
      <div className="content">
        <StarRating rating={movie.rating} />
        <h2 className="title">{movie.title}</h2>
      </div>
    </Movie>
  );
};

const Movie = styled('li')({
  boxShadow: '0 -2px 12px #BEBDBD',
  borderRadius: 4,

  '& .img': {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    aspectRatio: '1 / 1.4',
    objectFit: 'cover',
    borderRadius: '4px 4px 0 0',
  },

  '& .content': {
    padding: '4px 12px 12px',
  },

  '& .title': {
    fontSize: pxToRem(18),
    marginTop: 4,
    cursor: 'pointer',

    '&:hover': {
      color: '#01B4E4',
      fontWeight: 500,
    },
  },
});
