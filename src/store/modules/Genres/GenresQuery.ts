import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const API_KEY = '063d4204a31e1b961fde3d7c54b0ba5a'
export const genresAPI = createApi({
  reducerPath: 'genresAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/`,
  }),
  endpoints: builder => ({
    fetchGenres: builder.query({
      query: (arg) => ({
        url: `genre/movie/list?api_key=${API_KEY}&language=${arg}`,
      }),
    }),
  }),
});