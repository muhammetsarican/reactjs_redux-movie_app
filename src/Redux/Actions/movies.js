import { API_BASE } from "../../Configs/env"
import axios from "axios"

export const FETCH_MOVIES="FETCH_MOVIES";
export const FETCH_MOVIES_ERROR="FETCH_MOVIES_ERROR";

export function fetchMovies(){
    return async dispatch=>{
        await axios.get(`${API_BASE}/movies`)
        .then(result=>result.data)
        .then(data=>dispatch({
            type:FETCH_MOVIES,
            payload: data.movies
        }))
        .catch(err=>dispatch({
            type:FETCH_MOVIES_ERROR,
            payload:err
        }))
    }
}