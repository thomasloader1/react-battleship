import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useDispatch, connect } from "react-redux";
import { selectShipAction } from "../store/actions/battleshipAction";
import { setShipAction } from "../store/actions/shipAction";

function ShipHook({ space = 0, type = "", shipId, quantity, ...props }) {
  const dispatch = useDispatch();
  const { orientation } = props;
  return (
    <button
      type="button"
      key={`${type}_${shipId}`}
      className={`btn ${type}`}
      data-type={type}
      data-space={space}
      onClick={() => {
        dispatch(selectShipAction(type));
        dispatch(setShipAction(type, space, orientation, 0, 0));
        Swal.fire({
          toast: true,
          icon: "success",
          position: "bottom",
          title: `You select a ${type} ship`,
          showConfirmButton: false,
          timer: 1500
        });
      }}
    >
      {type.toUpperCase()} X{quantity}
    </button>
  );
}

ShipHook.defaultProps = {
  orientation: ""
};

ShipHook.propTypes = {
  space: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  shipId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  orientation: PropTypes.string
};

const mapStateToProps = (state) => ({
  orientation: state.battleshipReducer.orientation
});

export default connect(mapStateToProps)(ShipHook);
