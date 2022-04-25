export const PLACE_SHIP = "PLACE_SHIP";
export const placeShipAction = (shipType, space, orientation, start, end) => ({
  type: PLACE_SHIP,
  payload: { shipType, space, orientation, start, end }
});

export const SET_SHIP = "SET_SHIP";
export const setShipAction = (shipType, space, orientation, start, end) => ({
  type: SET_SHIP,
  payload: { shipType, space, orientation, start, end }
});

export const CHANGE_ORIENTATION = "CHANGE_ORIENTATION";
export const changeShipOrientation = (orientation) => ({
  type: CHANGE_ORIENTATION,
  payload: orientation
});

export const UNSELECT_SHIP = "UNSELECT_SHIP";
export const unselectLastShipAction = () => ({
  type: UNSELECT_SHIP
});
