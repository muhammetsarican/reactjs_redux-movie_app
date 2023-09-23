import React, { Component } from 'react'
import { NewMovieForm } from "./NewMovieForm"
import { connect } from "react-redux";
import {
  fetchNewMovie,
  fetchUpdateMovie,
  fetchMovie
} from '../../../Redux/Actions/newMovie';

export class NewMoviePage extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (!this.props.movie && match.params._id) {
      this.props.fetchMovie(match.params._id);
    }
  }
  render() {
    return (
      <div>
        <h2>New Movie Form</h2>
        <NewMovieForm
          movie={this.props.movie}
          newMovie={this.props.newMovie}
          fetchNewMovie={this.props.fetchNewMovie}
          fetchUpdateMovie={this.props.fetchUpdateMovie}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ newMovie, movies }, props) => {
  return {
    newMovie,
    movie: movies.movieList.find(movie => movie._id === props.match.params._id)
  }
}

const mapDispatchToProps = {
  fetchNewMovie,
  fetchUpdateMovie,
  fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage)