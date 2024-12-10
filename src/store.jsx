import { configureStore } from '@reduxjs/toolkit'
import MoviesReducer from './Features/Movies/MovieSlice'

export const store = configureStore({
 reducer: {
    movies: MoviesReducer
   }
})

