import React from "react";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
function Presentation({ player }) {
  // eslint-disable-next-line react/prop-types
  return <p>{player.name} vs CPU</p>;
}

const mapStateToProps = (state) => ({
  player: state.namePlayerReducer
});

export default connect(mapStateToProps)(Presentation);
