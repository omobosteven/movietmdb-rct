export interface MoviesResponse {
  page: number;
  results: MovieResults[];
  total_pages: number;
  total_results: number;
}

export interface MovieResults {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string | null;
  poster_path: string;
  title: string;
  vote_average: number;
}

export interface MovieDetailResponse extends MovieResults {
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
