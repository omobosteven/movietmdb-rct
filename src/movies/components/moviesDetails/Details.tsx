import React from 'react';
import { MovieDetail } from '../../movies.types';
import styled from 'styled-components';

interface DetailsProps {
  movie: MovieDetail;
}
export const Details = ({ movie }: DetailsProps) => {
  return (
    <Body>
      <h2 className="title">Overview</h2>
      <p className="text">{movie.overview}</p>
      <a href={movie.website || '#'} className="link">
        Website
      </a>
      <p className="text">
        <span>Status:</span> {movie.status}
      </p>
    </Body>
  );
};

const Body = styled('div')({
  textAlign: 'center',
  marginTop: 50,
  paddingLeft: '5%',
  paddingRight: '5%',

  '& .title': {
    fontWeight: 500,
    marginBottom: 30,
  },

  '& .link': {
    color: '#01B4E4',
  },

  '& .text': {
    marginBottom: 35,
    '& span': {
      fontWeight: 600,
    },
  },

  '@media screen and (min-width: 768px)': {
    marginTop: 80,
  },
});
