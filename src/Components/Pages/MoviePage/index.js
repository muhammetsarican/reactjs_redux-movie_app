import { connect } from 'react-redux';
import React, { Component } from 'react'
import PropTypes from "prop-types";
import MovieList from '../MovieList';

export class MoviePage extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  }
  render() {
    { console.log(this.props) }
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
export default connect(mapStateToProps)(MoviePage);