import {combineReducers, configureStore, getDefaultMiddleware, Reducer} from "@reduxjs/toolkit";
import {favouriteSlice} from './modules/Favourites/slice'
import {toggleFavouritesSlice} from './modules/Favourites/toggleFavourites.slice'
import {movieAPI} from "./modules/Movies/MoviesQuery";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {genresAPI} from "./modules/Genres/GenresQuery";
import {filterSlice} from "./modules/Filter/slice";
import {moviesSlice} from "./modules/Movies/slice";
import createSagaMiddleware from 'redux-saga'
import moviesSaga from "./modules/Movies/moviesSagas";


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    favourites: favouriteSlice.reducer,
    movieAPI: movieAPI.reducer,
    genresAPI: genresAPI.reducer,
    filter: filterSlice.reducer,
    fetchedMovies: moviesSlice.reducer,
    toggleFavourites: toggleFavouritesSlice.reducer
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favourites"],
    blacklist: ["movieAPI", "genresAPI", "filter", "fetchedMovies", "toggleFavorites"]

};

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);

export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(movieAPI.middleware).concat(genresAPI.middleware).concat(sagaMiddleware)
    })

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']

sagaMiddleware.run(moviesSaga)
