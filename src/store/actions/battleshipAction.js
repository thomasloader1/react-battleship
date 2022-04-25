export const GET_SHIPS = "GET_SHIPS";
export const getShipsAction = (action) => ({
  type: GET_SHIPS,
  payload: action
});

export const CHANGE_ORIENTATION = "CHANGE_ORIENTATION";
export const changeOrientationAction = (orientation) => ({
  type: CHANGE_ORIENTATION,
  payload: orientation
});

export const SELECT_SHIP = "SELECT_SHIP";
export const selectShipAction = (action) => ({
  type: SELECT_SHIP,
  payload: action
});

export const UNSELECT_SHIP = "UNSELECT_SHIP";
export const unselectShipAction = (action) => ({
  type: UNSELECT_SHIP,
  payload: action
});

export const DECREMENT_SHIP_UNIT = "DECREMENT_SHIP_UNIT";
export const decrementShipUnitAction = (type, quantity) => ({
  type: DECREMENT_SHIP_UNIT,
  payload: { type, quantity }
});

export const confirmPlaceShip = (payload) => (dispatch) => {
  const { shipType, shipQuantity } = payload;
  dispatch(unselectShipAction(null));
  dispatch(decrementShipUnitAction(shipType, shipQuantity - 1));
};
