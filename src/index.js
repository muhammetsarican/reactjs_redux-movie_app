import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from './Redux/Reducers/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom"
import logger from "redux-logger";
import reduxPromise from "redux-promise-middleware";

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxPromise, thunk, logger )
  ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
