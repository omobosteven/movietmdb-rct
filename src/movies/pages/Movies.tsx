import React, { useState, useEffect } from 'react';
import { Banner } from '../components/movies/Banner';
import { Actions } from '../components/movies/Actions';
import { MovieList } from '../components/movies/MovieList';
import { getDiscoverMovies } from '../movies.services';
import { Movie } from '../movies.types';
import styled from 'styled-components';
import { Spinner } from '../../common/Spinner';
import { Error } from '../../common/Error';
import { useFetch } from '../../hooks/useFetch';

export const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSetSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const { loading, data: movies, error } = useFetch(getDiscoverMovies);

  useEffect(() => {
    const filteredMovies =
      movies?.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      }) || null;
    const fMovies = filteredMovies?.length ? filteredMovies : null;
    setFilteredMovies(fMovies);
  }, [searchQuery]);

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
            {movies && (
              <MovieList movies={searchQuery ? filteredMovies : movies} />
            )}
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
