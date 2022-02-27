import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {MovieDetailsType} from "../../../types/types";

const API_KEY = '063d4204a31e1b961fde3d7c54b0ba5a'

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3`
  }),
  endpoints: (builder) => ({
    fetchDetails: builder.query<MovieDetailsType, any>({
      query: (id: number) => ({
        url: `movie/${id}?api_key=${API_KEY}&language=ru-RU&page=1`,
      })
    }),
  })
})

