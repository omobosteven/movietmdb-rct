import { API, API_KEY } from '../utils/Api';

export const getMovies = async () => {
  try {
    const { data: movies } = await API.get<MoviesRes>(
      `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    return deserializers.getMoviesData(movies?.results) ?? null;
  } catch (e) {
    console.log('error', e);
  }
};

const deserializers = {
  getMoviesData(data: MovieRes[]): Movie[] {
    return data?.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
        rating: movie.vote_average / 2,
      };
    });
  },
};

type MoviesRes = {
  page: number;
  results: MovieRes[];
  total_pages: number;
  total_results: number;
};

type MovieRes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
}
