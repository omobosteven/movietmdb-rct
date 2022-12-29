import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
export const API_KEY = '6d783de9a79497f5b2bb4aa8a18ff3c9';

const API = axios.create({
  baseURL: baseUrl,
});

export { API };

// const API_MOVIES =`https://api.themoviedb.org/3/discover/movie?api_key=6d783de9a79497f5b2bb4aa8a18ff3c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

// const API_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=6d783de9a79497f5b2bb4aa8a18ff3c9&language=en-US`

// const IMG_PATH = `https://image.tmdb.org/t/p/w300`
