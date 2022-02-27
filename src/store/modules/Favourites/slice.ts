import {createSlice} from "@reduxjs/toolkit";
import {FavouritesType, MovieType} from '../../../types/types'

const initialFavourites: FavouritesType = {
    favMovies: [],
}

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState: initialFavourites,
    reducers: {
        addToFavourites(state, action) {
            state.favMovies.push(action.payload);
            console.log(state.favMovies)
        },
        removeFromFavourites(state, action) {
            state.favMovies = state.favMovies.filter(
              (movie: MovieType) => movie.id !== action.payload);
        },
    },
})
export const {
    addToFavourites,
    removeFromFavourites,
} = favouriteSlice.actions

export default favouriteSlice.reducer