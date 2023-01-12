import React, { useState } from 'react';
import { Banner } from '../components/movies/Banner';
import { Actions } from '../components/movies/Actions';
import { MovieList } from '../components/movies/MovieList';
import { getDiscoverMovies, searchMovies } from '../movies.services';
import styled from 'styled-components';
import { Spinner } from '../../common/Spinner';
import { Error } from '../../common/Error';
import { useFetch } from '../../hooks/useFetch';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSetSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const {
    loading: dLoading,
    data: dMovies,
    error: dError,
  } = useFetch(getDiscoverMovies);

  const {
    loading: sLoading,
    data: sMovies,
    error: sError,
  } = useFetch(searchMovies, searchQuery, { enabled: !!searchQuery });

  const loading = searchQuery ? sLoading : dLoading;
  const movies = searchQuery ? sMovies : dMovies;
  const error = searchQuery ? sError : dError;

  return (
    <section>
      <Banner />
      <Container>
        <Actions search={searchQuery} onSearchChange={handleSetSearchQuery} />
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error && <Error message={error} />}
            {!loading && <MovieList movies={movies} />}
          </>
        )}
      </Container>
    </section>
  );
};

const Container = styled('div')({
  paddingLeft: '5%',
  paddingRight: '5%',
});
