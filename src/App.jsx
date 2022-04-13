import React from "react";
import Board from "./components/Board";
import UserName from "./components/UserName";
import Presentation from "./components/Presentation";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Battleship-app</h1>
      <Presentation />
      <div className="game-init">
        <Board />
        <UserName />
      </div>
    </div>
  );
}

export default App;
