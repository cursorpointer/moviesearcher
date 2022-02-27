import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects'
import {
  getMoviesFetch,
  getMoviesSuccess,
  getMoviesError,
} from "./slice";
import {MovieType} from "../../../types/types";

const API_KEY = '063d4204a31e1b961fde3d7c54b0ba5a'
const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

interface fetchMoviesActionType {
  payload: {
    date: number,
    rating: number,
    genres: any[],
    page: number
  }
}

interface fetchMoviesBySearchActionType {
  payload: {
    title: string;
    page: number
  }
}

interface FetchedData {
  data: {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
  };
}


function* fetchMovies(action: fetchMoviesActionType) {
  try {
    const moviesData: FetchedData = yield call(() =>
      movieApi.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru&page=${action.payload.page}&primary_release_date.lte=${action.payload.date}-01-01&with_genres=${action.payload.genres}&vote_average.gte=${action.payload.rating}`
      )
    );
    const fetchedArray = {
      movies: moviesData.data.results,
      pages: moviesData.data.total_pages
    }
    yield put(getMoviesSuccess(fetchedArray))
  } catch (error) {
    yield put(getMoviesError(error))
  }
}

function* searchMovies(action: fetchMoviesBySearchActionType) {
  try {
    const moviesData: FetchedData = yield call(() =>
      movieApi.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru&page=${action.payload.page}&query=${action.payload.title}`
      )
    );
    const fetchedArray = {
      movies: moviesData.data.results,
      pages: moviesData.data.total_pages
    }
    yield put(getMoviesSuccess(fetchedArray))
  } catch (error) {
    yield put(getMoviesError(error))
  }
}

function* moviesSaga() {
  yield takeEvery(getMoviesFetch, fetchMovies)
  yield takeEvery(getMoviesFetch, searchMovies)
}

export default moviesSaga;