import { API, API_KEY, handleApiError } from '../utils/Api';
import { AxiosError } from 'axios';

export const getDiscoverMovies = async () => {
  try {
    const { data } = await API.get<MoviesRes>(
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
    const { data } = await API.get<MovieDetailRes>(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return deserializers.getMovieDetails(data);
  } catch (e) {
    throw handleApiError(e as AxiosError);
  }
};

const deserializers = {
  getMoviesData(data: MovieRes[]): Movie[] | null {
    const movies = data?.map((movie) => {
      return {
        id: movie.id,
        title: movie.original_title,
        poster: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
        rating: movie.vote_average / 2,
      };
    });

    return movies.length ? movies : null;
  },

  getMovieDetails(data: MovieDetailRes): MovieDetail {
    return {
      id: data.id,
      title: data.original_title,
      poster: `https://image.tmdb.org/t/p/w342${data.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
      rating: data.vote_average / 2,
      overview: data.overview,
      status: data.status,
      website: data.homepage,
    };
  },
};

interface MoviesRes {
  page: number;
  results: MovieRes[];
  total_pages: number;
  total_results: number;
}

interface MovieRes {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string | null;
  poster_path: string;
  title: string;
  vote_average: number;
}

interface MovieDetailRes extends MovieRes {
  status: string;
  homepage: string | null;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
}

export interface MovieDetail extends Movie {
  overview: string | null;
  status: string;
  website: string | null;
  backdrop: string;
}
