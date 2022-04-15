import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { changeOrientationAction } from "../store/actions/battleshipAction";

function ShipOrientantionHook({ orientation, ship }) {
  const dispatch = useDispatch();
  const orientationTo =
    orientation === "Horizontally" ? "Vertically" : "Horizontally";
  const capitalizeShipText =
    ship === null ? "Select a ship" : ship[0].toUpperCase() + ship.substring(1);
  return (
    <div className="ship_config">
      <span>{capitalizeShipText}</span>
      <button
        type="button"
        onClick={() => {
          if (ship === null) {
            Swal.fire({
              title: "Not so fast!",
              text: "First select a ship and then you can change its orientation!.",
              icon: "warning",
              confirmButtonText: "Okay!",
              customClass: {
                confirmButton: "btn"
              },
              allowOutsideClick: false
            });
          } else {
            dispatch(changeOrientationAction(orientationTo));
            // dispatch(setShipAction(orientationTo));
          }
        }}
      >
        Orientation: {orientation}
      </button>
    </div>
  );
}

ShipOrientantionHook.defaultProps = {
  ship: ""
};

ShipOrientantionHook.propTypes = {
  orientation: PropTypes.string.isRequired,
  ship: PropTypes.string
};

export default ShipOrientantionHook;
