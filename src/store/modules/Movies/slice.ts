import {createSlice} from "@reduxjs/toolkit";
import {InitialMoviesType} from "../../../types/types";

const initialMovies: InitialMoviesType = {
  movies: [],
  pages: 0,
  status: '',
}

export const moviesSlice = createSlice({
  name: "fetchedMovies",
  initialState: initialMovies,
  reducers: {
    getMoviesFetch: (state, action) => {
      state.status = 'loading';
      console.log(action)
    },
    getMoviesSuccess: (state, action) => {
      state.movies = action.payload.movies;
      state.pages = action.payload.pages;
      state.status = 'success';
      console.log(state.movies)
    },
    getMoviesError: (state, action) => {
      state.status = 'error';
      console.log(action)
    },

  }
})

export const {
  getMoviesFetch,
  getMoviesSuccess,
  getMoviesError,
} = moviesSlice.actions

export default moviesSlice.reducer