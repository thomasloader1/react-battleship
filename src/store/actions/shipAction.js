export const PLACE_SHIP = "PLACE_SHIP";
export const placeShipAction = (shipType, space, orientation, start, end) => ({
  type: PLACE_SHIP,
  payload: { shipType, space, orientation, start, end }
});
