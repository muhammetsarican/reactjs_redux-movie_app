import {
    FETCH_MOVIES_PENDING,
    FETCH_MOVIES_FULFILLED,
    FETCH_MOVIES_REJECTED,
    DELETE_MOVIE_PENDING,
    DELETE_MOVIE_FULFILLED,
    DELETE_MOVIE_REJECTED
} from "../Actions/movies"

const initialState = {
    fetching: false,
    fetched: false,
    movieList: [],
    error: {}
}
const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_MOVIES_FULFILLED:
            return {
                ...state,
                movieList: action.payload,
                fetching: false,
                fetched: true
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        case DELETE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case DELETE_MOVIE_FULFILLED:
            return {
                ...state,
                movieList:state.movieList.filter(movie=>movie._id!==action.payload.id),
                fetching: false,
                fetched: true
            }
        case DELETE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        default:
            return state
    }
}
export default MovieReducer;