import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ShipOrientantionHook from "../hooks/ShipOrientantionHook";
import Ships from "./Ships";
import Grid from "./Grid";

// React Component
function Board(props) {
  const { ships, orientation, shipSelected } = props;

  return (
    <div className="grid md:grid-cols-[80%_20%]">
      <Grid data={props} />
      <div className="ships bg-slate-500">
        <ShipOrientantionHook orientation={orientation} ship={shipSelected} />
        <Ships ships={ships} />
      </div>
    </div>
  );
}

Board.defaultProps = {
  shipSelected: ""
};

// Validate the props we need on component
Board.propTypes = {
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      space: PropTypes.number,
      quantity: PropTypes.number
    })
  ).isRequired,
  orientation: PropTypes.string.isRequired,
  shipSelected: PropTypes.string
};

const mapStateToProps = (state) => ({
  boardSettings: state.boardReducer,
  ships: state.battleshipReducer.ships,
  orientation: state.battleshipReducer.orientation,
  shipSelected: state.battleshipReducer.shipSelected
});

export default connect(mapStateToProps)(Board);
