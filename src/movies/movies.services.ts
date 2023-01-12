import { API, API_KEY, handleApiError } from '../utils/Api';
import { AxiosError } from 'axios';
import {
  MoviesResponse,
  MovieDetailResponse,
  Movie,
  MovieResults,
  MovieDetail,
} from './movies.types';

export const searchMovies = async (query: string | undefined) => {
  try {
    if (!query) return null;
    const { data } = await API.get<MoviesResponse>(
      `/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&&page=1&query=${query}`
    );
    return deserializers.getMoviesData(data?.results);
  } catch (e) {
    throw handleApiError(e as AxiosError);
  }
};
export const getDiscoverMovies = async () => {
  try {
    const { data } = await API.get<MoviesResponse>(
      `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    return deserializers.getMoviesData(data?.results);
  } catch (e) {
    throw handleApiError(e as AxiosError);
  }
};

export const getMovieDetails = async (id: number | undefined) => {
  try {
    if (!id) return null;
    const { data } = await API.get<MovieDetailResponse>(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return deserializers.getMovieDetails(data);
  } catch (e) {
    throw handleApiError(e as AxiosError);
  }
};

const deserializers = {
  getMoviesData(data: MovieResults[]): Movie[] | null {
    const movies = data?.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
        rating: movie.vote_average / 2,
      };
    });

    return movies.length ? movies : null;
  },

  getMovieDetails(data: MovieDetailResponse): MovieDetail {
    return {
      id: data.id,
      title: data.title,
      poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
      rating: data.vote_average / 2,
      overview: data.overview,
      status: data.status,
      website: data.homepage,
    };
  },
};
