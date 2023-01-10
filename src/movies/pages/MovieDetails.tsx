import React from 'react';
import { getMovieDetails } from '../movies.services';
import { useParams, Link } from 'react-router-dom';
import { StarRating } from '../components/StarRating';
import styled from 'styled-components';
import { PageTitle } from '../components/PageTitle';
import { Spinner } from '../../common/Spinner';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../components/Error';

export const MovieDetails = () => {
  const { movieId } = useParams();

  let id;
  if (movieId) {
    id = parseInt(movieId);
  }

  const {
    loading,
    data: movie,
    error,
  } = useFetch(getMovieDetails, id, {
    enabled: !!id,
  });

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
        {movie && (
          <div className="content">
            <StarRating rating={movie.rating} showLabel />
            <h2 className="title">{movie.title}</h2>
            <p className="text">{movie.overview}</p>
          </div>
        )}
      </Header>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <Error message={error} />}
          {movie && (
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
          )}
        </>
      )}
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
