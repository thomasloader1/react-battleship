import React from "react";
import Cell from "./Cell";

const drawn = () => {
  const clickHandler = (event) => {
    console.log(event.target.dataset);
  };

  const rowsBoard = [];
  for (let y = 0; y < 10; y += 1) {
    const cellsBoard = [];

    for (let x = 0; x < 10; x += 1) {
      cellsBoard.push(
        <Cell key={x + y} positionY={y} positionX={x} callback={clickHandler} />
      );
    }

    rowsBoard.push(
      <div key={y.toString()} className="board-row">
        {cellsBoard}
      </div>
    );
  }

  return rowsBoard;
};

export default function Board() {
  return <div className="board">{drawn()}</div>;
}
