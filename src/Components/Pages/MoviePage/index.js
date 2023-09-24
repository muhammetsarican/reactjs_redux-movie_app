import { connect } from 'react-redux';
import React, { Component } from 'react'
import PropTypes from "prop-types";
import MovieList from '../MovieList';
import { fetchMovies, fetchDeleteMovie } from "../../../Redux/Actions/movies"

class MoviePage extends Component {
  static propTypes = {
    movies: PropTypes.object.isRequired,
    fetchDeleteMovie: PropTypes.func.isRequired
  }
  componentDidMount(){
    this.props.fetchMovies();
  }
  render() {
    return (
      <div>MoviePage
        <MovieList movies={this.props.movies} fetchDeleteMovie={this.props.fetchDeleteMovie}></MovieList>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}
const mapDispatchToProps = {
  fetchMovies,
  fetchDeleteMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);