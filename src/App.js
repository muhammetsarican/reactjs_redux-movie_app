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
import NewMoviePage from './Components/Pages/NewMoviePage';
import HomePage from './Components/Pages/HomePage';

export class App extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container style={{minHeight:"100dvh",marginTop:"5rem"}}>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/movies" component={MoviePage} exact></Route>
          <Route path="/movies/new" component={NewMoviePage} exact></Route>
          <Route path="/movies/new" component={NewMoviePage} exact></Route>
          <Route path="/movie/:_id" component={NewMoviePage} exact></Route>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App