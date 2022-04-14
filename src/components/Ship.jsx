/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Ship({ space = 0, type = "", shipId, quantity }) {
  return (
    <button
      type="button"
      key={`${type}_${shipId}`}
      className={`btn ${type}`}
      data-type={type}
      data-space={space}
    >
      {type.toUpperCase()} X{quantity}
    </button>
  );
}

Ship.propTypes = {
  space: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  shipId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  ships: state.battleshipReducer.ships
});

export default connect(mapStateToProps)(Ship);
