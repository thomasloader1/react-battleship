import React from "react";
import { connect } from "react-redux";
import CellHook from "../hooks/CellHook";
// import Cell from "./Cell";

const drawn = (state) => {
  const rowsBoard = [];
  for (let y = 1; y <= state.boardSettings.columns; y += 1) {
    const cellsBoard = [];

    for (let x = 1; x <= state.boardSettings.rows; x += 1) {
      cellsBoard.push(
        <CellHook key={`x${x}-y${y}`} positionY={y} positionX={x} />
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

function Board(props) {
  return <div className="board">{drawn(props)}</div>;
}

const mapStateToProps = (state) => ({
  boardSettings: state.boardReducer
});

export default connect(mapStateToProps)(Board);
