import {combineReducers} from 'redux'
import movieReducer from "./movies";
import NewMovieReducer from "./newMovie"
export const rootReducer=combineReducers({
    movies:movieReducer,
    newMovie:NewMovieReducer
})