/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectCellAction } from "../store/actions/selectCellAction";

function Cell({ positionX = 0, positionY = 0, selectCellAction }) {
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
  positionY: PropTypes.number.isRequired,
  selectCellAction: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Cell);
