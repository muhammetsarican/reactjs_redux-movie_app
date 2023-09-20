import { FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED } from "../Actions/movies"

const initialState={
    fetching:false,
    fetched:false,
    movies:[],
    error:{}
}
const MovieReducer=(state=initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
            return{
                ...state,
                fetching:true
            }
        case FETCH_MOVIES_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching:false,
                fetched:true
            }
        case FETCH_MOVIES_REJECTED:
            return{
                ...state,
                error:action.payload,
                fetching:false
            }
        default:
            return state
    }
}
export default MovieReducer;