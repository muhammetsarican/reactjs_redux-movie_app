import { connect } from 'react-redux';
import React, { Component } from 'react'
import PropTypes from "prop-types";
import MovieList from '../MovieList';
import { fetchMovies } from "../../../Redux/Actions/movies"

export class MoviePage extends Component {
  static propTypes = {
    movies: PropTypes.object.isRequired
  }
  componentDidMount(){
    this.props.fetchMovies();
  }
  render() {
    console.log(this.props)
    return (
      <div>MoviePage
        <MovieList movies={this.props.movies}></MovieList>
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
  fetchMovies
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);