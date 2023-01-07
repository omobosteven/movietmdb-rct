import { rest } from 'msw';

// `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
export const handlers = [
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
];
