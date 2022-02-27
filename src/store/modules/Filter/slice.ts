import {createSlice} from "@reduxjs/toolkit";
import {FilterType} from '../../../types/types'

const initialFilter: FilterType = {
  genres: [],
  date: 0,
  rating: 0,
  page: 1,
  filterCollapse: false
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterGenres: (state, action) => {
      state.genres.push(action.payload);
    },
    filterDate: (state, action) => {
      state.date = action.payload;
    },
    filterRating: (state, action) => {
      state.rating = action.payload;
    },
    filterPage: (state, action) => {
      state.page = action.payload;
    },
    filterCollapseAction: (state) => {
      state.filterCollapse = !state.filterCollapse;
    },
  },
})
export const {
  filterGenres,
  filterDate,
  filterRating,
  filterPage,
  filterCollapseAction
} = filterSlice.actions

export default filterSlice.reducer