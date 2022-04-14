import React from "react";
import PropTypes from "prop-types";
import CellHook from "../hooks/CellHook";

// Helper to draw the grid
const draw = (state) => {
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

// React Component
function Grid({ data }) {
  return <div className="board">{draw(data)}</div>;
}

// Validate the props we need on component
Grid.propTypes = {
  data: PropTypes.shape({
    boardSettings: PropTypes.shape({
      columns: PropTypes.number.isRequired,
      rows: PropTypes.number.isRequired
    })
  }).isRequired
};

export default Grid;
