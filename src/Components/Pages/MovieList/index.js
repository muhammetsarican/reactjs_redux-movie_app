import React from 'react'
import PropTypes from 'prop-types'

const MovieList=({movies})=> {
    const emptyMessage=(
        <p>There are no movies yet.</p>
    )
    const movieList=(
        <div>
            MoviesList
        </div>
    )
  return (
    <div>
        {movies.length===0?emptyMessage:movieList}
        {movies.error.response?(<h3>An error occured!</h3>):(<h3>No error</h3>)}
    </div>
  )
}

MovieList.propTypes = {
    movies:PropTypes.shape({
        movies:PropTypes.array.isRequired
    }).isRequired
}

export default MovieList
