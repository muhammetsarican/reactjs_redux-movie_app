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
    </div>
  )
}

MovieList.propTypes = {
    movies:PropTypes.array.isRequired
}

export default MovieList
