import React from "react";
import ReactDOM from "react-dom";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

import "./index.css";

import App from "./App.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector("#root"));
