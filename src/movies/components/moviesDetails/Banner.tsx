import React from 'react';
import styled from 'styled-components';
import { MovieDetail } from '../../movies.types';
import { PageTitle } from '../PageTitle';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating';

interface BannerProps {
  movie: MovieDetail | null;
}
export const Banner = ({ movie }: BannerProps) => {
  return (
    <Header>
      <StyledPageTitle>
        <Link to="/" className="link">
          Movies DB
        </Link>
      </StyledPageTitle>
      <ImgWrapper>
        <img src={movie?.poster} alt={movie?.title} className="img" />
      </ImgWrapper>
      {movie && (
        <Content>
          <StarRating rating={movie.rating} showLabel />
          <h2 className="title">{movie.title}</h2>
          <p className="text">{movie.overview}</p>
        </Content>
      )}
    </Header>
  );
};

const Header = styled('header')({
  backgroundColor: '#EBEBEB',
  display: 'flex',
  flexDirection: 'column',
  columnGap: 30,
  padding: '37px 5% 30px',

  '@media screen and (min-width: 600px)': {
    display: 'grid',
    gridTemplateColumns: '300px auto',
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
    "title title"
    "img content"
    `,
  },
});

const StyledPageTitle = styled(PageTitle)({
  gridArea: 'title',

  '& .link': {
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
});

const ImgWrapper = styled('div')({
  gridArea: 'img',

  '& .img': {
    width: '100%',
    height: 'auto',
  },

  '@media screen and (min-width: 600px)': {
    position: 'relative',
    bottom: -80,
    alignSelf: 'end',
  },
});

const Content = styled('div')({
  gridArea: 'content',
  maxWidth: 768,
  alignSelf: 'end',

  '& .title': {
    fontWeight: 500,
  },
  '& .text': {
    color: '#1E1E1E',
  },
});
