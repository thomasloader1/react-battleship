import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeOrientationAction } from "../store/actions/battleshipAction";

function ShipOrientantion(props) {
  console.log(props);
  const { orientation } = props;
  return (
    <div className="ship_config">
      <div>Ship selected</div>
      <button
        type="button"
        onClick={() => {
          changeOrientationAction("Vertically");
        }}
      >
        Orientation: {orientation}
      </button>
    </div>
  );
}

ShipOrientantion.propTypes = {
  orientation: PropTypes.string.isRequired
};

const mapDispatchToProps = () => ({
  changeOrientationAction
});

export default connect(null, mapDispatchToProps)(ShipOrientantion);
