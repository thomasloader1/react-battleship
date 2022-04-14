import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectCellAction } from "../store/actions/selectCellAction";

function Cell({ positionX = 0, positionY = 0 }) {
  return (
    <button
      type="button"
      className="board-cell"
      data-y={positionY}
      data-x={positionX}
      onClick={() => {
        selectCellAction(positionY, positionX);
      }}
    />
  );
}

const mapDispatchToProps = {
  selectCellAction
};

Cell.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired
};

export default connect(null, mapDispatchToProps)(Cell);
