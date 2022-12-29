import React, { useState, useEffect } from 'react';
import { Banner } from '../components/Banner';
import { Actions } from '../components/Actions';
import { Movies } from '../components/Movies';
import { getMovies, Movie } from '../home.services';

export const Home = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    (async () => {
      const movies = (await getMovies()) ?? null;
      setMovies(movies);
    })();
  }, []);

  return (
    <>
      <Banner />
      <Actions />
      <Movies movies={movies} />
    </>
  );
};
