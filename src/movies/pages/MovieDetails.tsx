import React, { useEffect, useState } from 'react';
import { getMovieDetails, MovieDetail } from '../movies.services';
import { useParams, Link } from 'react-router-dom';
import { StarRating } from '../components/StarRating';
import styled from 'styled-components';
import { PageTitle } from '../components/PageTitle';

export const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      (async () => {
        const movie = (await getMovieDetails(parseInt(movieId))) ?? null;
        setMovie(movie);
      })();
    }
  }, []);

  return (
    <section>
      <Header>
        <div className="banner">
          <PageTitle>
            <Link to="/" className="link">
              Movies DB
            </Link>
          </PageTitle>
          <img src={movie?.poster} alt={movie?.title} className="img" />
        </div>
        <div className="content">
          <StarRating rating={movie?.rating || 0} showLabel />
          <h2 className="title">{movie?.title}</h2>
          <p className="text">{movie?.overview}</p>
        </div>
      </Header>
      <Body>
        <h2 className="title">Overview</h2>
        <p className="text">{movie?.overview}</p>
        <a href={movie?.website || '#'} className="link">
          Website
        </a>
        <p className="text">
          <span>Status:</span> {movie?.status}
        </p>
      </Body>
    </section>
  );
};

const Header = styled('header')({
  backgroundColor: '#EBEBEB',
  display: 'flex',
  flexDirection: 'column',
  columnGap: 30,
  padding: '37px 5% 30px',

  '& .banner': {
    '& .link': {
      color: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },

    '& .img': {
      width: '100%',
      height: 'auto',
    },

    '@media screen and (min-width: 768px)': {
      flex: '1 0 auto',
      maxWidth: 300,

      '& .img': {
        position: 'relative',
        bottom: -70,
      },
    },
  },

  '& .content': {
    alignSelf: 'flex-end',
    maxWidth: 768,

    '& .title': {
      fontWeight: 500,
    },
    '& .text': {
      color: '#1E1E1E',
    },
  },

  '@media screen and (min-width: 768px)': {
    flexDirection: 'row',
  },
});

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
    color: '#1E1E1E',
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
