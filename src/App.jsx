import "./App.scss";

import React from "react";
import { Provider } from "react-redux";

import Board from "./components/Board";
import Presentation from "./components/Presentation";
import store from "./store";
import UsernameHook from "./hooks/UsernameHook";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Battleship-app</h1>
        <Presentation />
        <div className="game-init">
          <Board />
          <UsernameHook />
        </div>
      </div>
    </Provider>
  );
}

export default App;
