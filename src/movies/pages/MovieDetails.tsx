import React from 'react';
import { getMovieDetails } from '../movies.services';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../common/Spinner';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../../common/Error';
import { Banner } from '../components/moviesDetails/Banner';
import { Details } from '../components/moviesDetails/Details';

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
      <Banner movie={movie} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <Error message={error} />}
          {movie && <Details movie={movie} />}
        </>
      )}
    </section>
  );
};
