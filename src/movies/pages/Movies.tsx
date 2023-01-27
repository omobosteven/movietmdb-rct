import React, { useState } from 'react';
import styled from 'styled-components';
import { Banner } from '../components/movies/Banner';
import { Actions } from '../components/movies/Actions';
import { MovieList } from '../components/movies/MovieList';
import { getMovies } from '../movies.services';
import { Spinner } from '../../common/Spinner';
import { Error } from '../../common/Error';
import { useFetch } from '../../hooks/useFetch';

const getSearchTermFromSession = () => {
  const item = sessionStorage.getItem('searchTerm');
  return item ? JSON.parse(item) : '';
};
export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(() =>
    getSearchTermFromSession()
  );

  const handleSetSearchQuery = (value: string) => {
    setSearchQuery(value);
    sessionStorage.setItem('searchTerm', JSON.stringify(value));
  };

  const { loading, data, error, isSuccess } = useFetch(getMovies, searchQuery);

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
            {isSuccess && <MovieList movies={data} />}
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

export default Movies;
