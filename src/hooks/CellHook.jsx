import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { selectCellAction } from "../store/actions/selectCellAction";

function CellHook({ positionY, positionX }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="board-cell"
      data-y={positionY}
      data-x={positionX}
      onClick={() => {
        dispatch(selectCellAction(positionY, positionX));
      }}
    />
  );
}

CellHook.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired
};

export default CellHook;
