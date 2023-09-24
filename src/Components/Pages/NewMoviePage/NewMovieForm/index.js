import React, { Component } from 'react';
import { Button, Image, Form, Message } from 'semantic-ui-react';
import InlineError from "../../InlineError";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class NewMovieForm extends Component {
  state = {
    id: this.props.movie ? this.props.movie._id : "",
    title: this.props.movie ? this.props.movie.title : "",
    cover: this.props.movie ? this.props.movie.cover : "",
    errors: {},
    redirect:false
  }
  static propTypes = {
    fetchNewMovie: PropTypes.func.isRequired
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      redirect:true
    })
  }
  handleSubmit = () => {
    const validateError = this.validate();
    if (validateError) this.setState({ "errors": validateError });
    const id=this.state.id || this.props.newMovie.movie._id;
    if (Object.keys(validateError).length === 0) {
      if(!id){
        this.props.fetchNewMovie(this.state);
      }else{
        this.props.fetchUpdateMovie({...this.state, id});
      }
    }
  }
  validate = () => {
    const error = {};

    if (!this.state.title) error.title = "You have to prevent a title!";
    if (!this.state.cover) error.cover = "You have to prevent a cover!";
    return error;
  }

  componentWillReceiveProps(nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie && movie.title !== this.state.title) {
      this.setState({
        title: movie.title,
        cover: movie.cover
      })
    }
  }
  render() {
    const errors = this.state.errors

    const form = (
      <Form onSubmit={this.handleSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
        <Form.Field error={!!errors.title}>
          <label>Title</label>
          <input placeholder='Title'
            id='Title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />{
            errors && (
              <InlineError message={errors.title} />
            )
          }
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover</label>
          <input placeholder='Cover'
            id='Cover'
            name='cover'
            value={this.state.cover}
            onChange={this.handleChange}
          />{
            errors && (
              <InlineError message={errors.cover} />
            )
          }
        </Form.Field>
        <Form.Field>
          <Image src={this.state.cover} size='small' disabled />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        {
          this.props.newMovie.error.response &&
          (
            <Message negative>
              <Message.Header>We're sorry :/</Message.Header>
              <p>A problem occured while recording!</p>
            </Message>
          )
        }
      </Form>
    )
    return (
      <div>
        {this.props.newMovie.done && this.state.redirect ? <Redirect to="/movies" /> : form}
      </div>
    )
  }
}

export default NewMovieForm