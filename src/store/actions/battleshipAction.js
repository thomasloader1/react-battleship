export const GET_SHIPS = "GET_SHIPS";
export const getShipsAction = (action) => ({
  type: GET_SHIPS,
  payload: action
});

export const CHANGE_ORIENTATION = "CHANGE_ORIENTATION";
export const changeOrientationAction = (action) => ({
  type: CHANGE_ORIENTATION,
  payload: action
});

export const SELECT_SHIP = "SELECT_SHIP";
export const selectShipAction = (action) => ({
  type: SELECT_SHIP,
  payload: action
});
