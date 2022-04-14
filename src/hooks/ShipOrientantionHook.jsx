import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { changeOrientationAction } from "../store/actions/battleshipAction";

function ShipOrientantionHook({ orientation, ship }) {
  const dispatch = useDispatch();
  const orientationTo =
    orientation === "Horizontally" ? "Vertically" : "Horizontally";
  const capitalizeShipText = ship[0].toUpperCase() + ship.substring(1);
  return (
    <div className="ship_config">
      <span>{capitalizeShipText}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(changeOrientationAction(orientationTo));
        }}
      >
        Orientation: {orientation}
      </button>
    </div>
  );
}

ShipOrientantionHook.propTypes = {
  orientation: PropTypes.string.isRequired,
  ship: PropTypes.string.isRequired
};

export default ShipOrientantionHook;
