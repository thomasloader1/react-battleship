/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import { useDispatch, connect } from "react-redux";
import { selectCellAction } from "../store/actions/selectCellAction";
import {
  placeShipAction,
  unselectLastShipAction
} from "../store/actions/shipAction";
import {
  decrementShipUnitAction,
  unselectShipAction
} from "../store/actions/battleshipAction";
import { setPlayerShipAction } from "../store/actions/playerAction";

function CellHook({
  positionY,
  positionX,
  orientation,
  ship,
  cellTarget,
  ships
}) {
  const cellRef = useRef(null);
  const dispatch = useDispatch();
  const { x: cellX, y: cellY } = cellTarget;
  const { shipType, space, start, end } = ship;

  const startPlace =
    orientation === "Horizontally" ? positionX + space : positionX;
  const endPlace = orientation === "Vertically" ? positionY + space : positionY;

  // eslint-disable-next-line consistent-return
  /*   const checkCells = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    if (element.classList.contains("selected")) {
      console.log(element);
      return element;
    }
  }; */

  const decorateCells = (from, to, move) => {
    /*     for (let i = from; i < to; i += 1) {
      const checking = checkCells(
        `button[data-key='x${move === "x" ? i : cellX}-y${
          move === "y" ? i : cellY
        }`
      );
    } */
    if (from + space > 10 || to > 10) {
      for (let i = from; i > from - space; i -= 1) {
        // console.log(i, from);
        document
          .querySelector(
            `button[data-key='x${move === "x" ? i : cellX}-y${
              move === "y" ? i : cellY
            }`
          )
          .classList.add("selected");
      }
    } else {
      for (let i = from; i < to; i += 1) {
        document
          .querySelector(
            `button[data-key='x${move === "x" ? i : cellX}-y${
              move === "y" ? i : cellY
            }`
          )
          .classList.add("selected");
      }
    }
  };

  useEffect(() => {
    const { key } = cellRef.current.dataset;

    if (key === `x${cellX}-y${cellY}`) {
      const { from, to, move } =
        orientation === "Horizontally"
          ? { from: cellX, to: cellX + space, move: "x" }
          : { from: cellY, to: cellY + space, move: "y" };

      decorateCells(from, to, move);
    }
  }, [start, end]);

  return (
    <button
      ref={cellRef}
      type="button"
      className="board-cell"
      data-y={positionY}
      data-x={positionX}
      data-key={`x${positionX}-y${positionY}`}
      onClick={() => {
        if (shipType) {
          const shipsQuantity = ships.filter((s) => s.type === shipType);
          console.log(ship);
          dispatch(selectCellAction(positionY, positionX));
          dispatch(
            placeShipAction(shipType, space, orientation, startPlace, endPlace)
          );
          dispatch(setPlayerShipAction(ship));
          dispatch(
            decrementShipUnitAction(shipType, shipsQuantity[0].quantity)
          );
          dispatch(unselectLastShipAction());
          dispatch(unselectShipAction(null));
        } else {
          Swal.fire({
            title: "Wait a minute!",
            text: "Select a ship first and then select in the box of your choice!.",
            icon: "warning",
            confirmButtonText: "Okay!",
            customClass: {
              confirmButton: "btn"
            },
            allowOutsideClick: false
          });
        }
      }}
    />
  );
}

CellHook.defaultProps = {
  orientation: "",
  ship: {},
  ships: [],
  cellTarget: {}
};

CellHook.propTypes = {
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  orientation: PropTypes.string,
  ship: PropTypes.shape({
    shipType: PropTypes.string,
    space: PropTypes.number,
    start: PropTypes.number,
    end: PropTypes.number
  }),
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      space: PropTypes.number,
      quantity: PropTypes.number,
      filter: PropTypes.func
    })
  ),
  cellTarget: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

const mapStateToProps = (state) => ({
  orientation: state.battleshipReducer.orientation,
  ships: state.battleshipReducer.ships,
  ship: state.shipReducer,
  cellTarget: state.selectCellReducer
});

export default connect(mapStateToProps)(CellHook);
