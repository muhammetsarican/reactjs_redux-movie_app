import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react'
import { PacmanLoader } from "react-spinners"
  
const MovieList = ({ movies, fetchDeleteMovie }) => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    )
    const movieList = (
        <div>
            <PacmanLoader
                color={"#35BDB2"}
                loading={movies.fetching}
            />
            {movies.error.response ? <h3>An error occured!</h3> :
                <Grid stackable columns={3}>
                    {
                        movies.movieList.map(movie =>
                            <MovieCard key={movie._id} movie={movie} fetchDeleteMovie={fetchDeleteMovie}/>
                        )
                    }
                </Grid>
            }
        </div>
    )
    return (
        <div>
            {movies.length === 0 ? emptyMessage : movieList}
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
}

export default MovieList
