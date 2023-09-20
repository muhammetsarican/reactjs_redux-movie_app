import React, { Component } from 'react'
import { Button, Image, Form } from 'semantic-ui-react'
import InlineError from "../../InlineError"

export class NewMovieForm extends Component {
  state={
    title:"",
    cover:"",
    errors:{}
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit=()=>{
    const validateError=this.validate();
    if(validateError) this.setState({"errors":validateError});
    console.log(this.state.errors)
  }
  validate=()=>{
    const error={};

    if(!this.state.title) error.title="You have to prevent a title!";
    if(!this.state.cover) error.cover="You have to prevent a cover!";
    return error;
  }
  render() {
    const errors=this.state.errors
    return (
      <div>
        <h2>New Movie Form</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field error={!!errors.title}>
            <label>Title</label>
            <input placeholder='Title' 
            id='Title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            />{
              errors&&(
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
              errors&&(
                <InlineError message={errors.cover} />
              )
            }
          </Form.Field>
          <Form.Field>
          <Image src={this.state.cover} size='small' disabled />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewMovieForm