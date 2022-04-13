import React from "react";
import PropTypes from "prop-types";

function Cell({ positionX = 0, positionY = 0, callback = () => {} }) {
  // console.log(positionX, positionY, callback);
  return (
    <button
      type="button"
      className="board-cell"
      data-y={positionY}
      data-x={positionX}
      onClick={callback}
    />
  );
}

Cell.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired
};

export default Cell;
