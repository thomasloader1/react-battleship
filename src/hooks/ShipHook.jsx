import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { selectShipAction } from "../store/actions/battleshipAction";

function ShipHook({ space = 0, type = "", shipId, quantity }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      key={`${type}_${shipId}`}
      className={`btn ${type}`}
      data-type={type}
      data-space={space}
      onClick={() => {
        dispatch(selectShipAction(type));
      }}
    >
      {type.toUpperCase()} X{quantity}
    </button>
  );
}

ShipHook.propTypes = {
  space: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  shipId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ShipHook;
