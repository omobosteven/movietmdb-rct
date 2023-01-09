import React, { useState, useEffect } from 'react';
import { Banner } from '../components/Banner';
import { Actions } from '../components/Actions';
import { MovieList } from '../components/MovieList';
import { getDiscoverMovies, Movie } from '../movies.services';
import styled from 'styled-components';

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSetSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    (async () => {
      const movies = (await getDiscoverMovies()) ?? null;
      setMovies(movies);
    })();
  }, []);

  useEffect(() => {
    const filteredMovies =
      movies?.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      }) || null;
    setFilteredMovies(filteredMovies);
  }, [searchQuery]);

  return (
    <section>
      <Banner />
      <Container>
        <Actions search={searchQuery} onSearchChange={handleSetSearchQuery} />
        <MovieList movies={searchQuery ? filteredMovies : movies} />
      </Container>
    </section>
  );
};

const Container = styled('div')({
  paddingLeft: '5%',
  paddingRight: '5%',
});
