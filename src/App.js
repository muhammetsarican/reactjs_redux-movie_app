import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import MoviePage from "./Components/Pages/MoviePage"

import React, { Component } from 'react'

export class App extends Component {
  render() {
    {console.log(this.props)}
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/movies">
          Movies
        </Link>
      </header>
      <Route path="/movies" component={MoviePage}></Route>
    </div>
    )
  }
}

export default App