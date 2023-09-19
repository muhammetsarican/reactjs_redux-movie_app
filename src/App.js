import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import "semantic-ui-css/semantic.min.css"

import MoviePage from "./Components/Pages/MoviePage"

import React, { Component } from 'react'

import {
  Container,
} from 'semantic-ui-react'

import Footer from './Components/Footer';
import Header from './Components/Header';

export class App extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Header />
        <Container style={{height:"100dvh",marginTop:"5rem"}}>
          <Route path="/movies" component={MoviePage}></Route>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App