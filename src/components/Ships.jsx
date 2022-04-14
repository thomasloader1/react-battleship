import React from "react";
import PropTypes from "prop-types";
import ShipHook from "../hooks/ShipHook";

function Ships({ ships }) {
  return (
    <>
      {ships.map((ship, shipId) => (
        <ShipHook
          // eslint-disable-next-line react/no-array-index-key
          key={`ship_${shipId}`}
          type={ship.type}
          space={ship.space}
          quantity={ship.quantity}
          shipId={1}
        />
      ))}
    </>
  );
}

Ships.propTypes = {
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      space: PropTypes.number,
      quantity: PropTypes.number
    })
  ).isRequired
};

export default Ships;
