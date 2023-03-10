import { rest } from 'msw';

// `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
export const handlers = [
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    return res(
      ctx.json({
        page: 1,
        total_pages: 1,
        total_results: 1,
        results: [
          {
            backdrop_path: '/image.jpg',
            id: 1,
            original_title: 'a great',
            overview: 'lorem some text here now',
            title: 'a great',
            poster_path: '/image.jpg',
            vote_average: 8,
          },
        ],
      })
    );
  }),

  rest.get('https://api.themoviedb.org/3/discover/movie', (req, res, ctx) => {
    return res(
      ctx.json({
        page: 1,
        total_pages: 1,
        total_results: 2,
        results: [
          {
            backdrop_path: '/image.jpg',
            id: 1,
            original_title: 'a good: right',
            overview: 'lorem some text here now',
            title: 'a good',
            poster_path: '/image.jpg',
            vote_average: 8,
          },
          {
            backdrop_path: '/image-show.jpg',
            id: 2,
            original_title: 'a show: series',
            overview: 'lorem some text here now',
            title: 'a show',
            poster_path: '/image-show.jpg',
            vote_average: 6,
          },
        ],
      })
    );
  }),

  rest.get('https://api.themoviedb.org/3/movie/:movieId', (req, res, ctx) => {
    const { movieId } = req.params;

    return res(
      ctx.json({
        backdrop_path: '/image.jpg',
        id: movieId,
        original_title: 'a good: right',
        overview: 'lorem some text here now',
        title: 'a good',
        poster_path: '/image.jpg',
        vote_average: 8,
        status: 'released',
        homepage: 'https://movie.com',
      })
    );
  }),
];
