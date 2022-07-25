import "./Film.css";
import "./Hero.css";
import React, { useState } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import promiseReducer from "./components/PromiseReducer";
import actionPromise from "./components/ActionPromise";
import Hero from "./components/HeroInfo";
import Film from "./components/FilmInfo";
import fetchData from "./components/FetchData";

const store = createStore(promiseReducer, applyMiddleware(thunk));
const urlToObiWan = "https://swapi.dev/api/people/10";
const urlToFilm = "https://swapi.dev/api/films/1/";
store.dispatch(actionPromise("ObiWan", fetchData(urlToObiWan)));
store.dispatch(actionPromise("Film", fetchData(urlToFilm)));
store.subscribe(() => console.log(store.getState()));
const ConnectHero = connect((state) => state.ObiWan || {})(Hero);
const ConnectFilm = connect((state) => state.Film || {})(Film);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectHero />
        <ConnectFilm />
      </div>
    </Provider>
  );
}

export default App;
