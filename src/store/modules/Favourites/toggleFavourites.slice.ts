import {createSlice} from "@reduxjs/toolkit";
import {FavouritesToggleType} from "../../../types/types";

const initialToggleFav: FavouritesToggleType = {
  favouritesMode: false
}

export const toggleFavouritesSlice = createSlice({
  name: "toggleFavourites",
  initialState: initialToggleFav,
  reducers: {
    toggleMode (state) {
      state.favouritesMode = !state.favouritesMode
    }
  }
})

export const { toggleMode } = toggleFavouritesSlice.actions

export default toggleFavouritesSlice.reducer