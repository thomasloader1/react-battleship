export const SHOOT_CELL = "SHOOT_CELL";
export const shootCellAction = (positionY, positionX) => ({
  type: SHOOT_CELL,
  payload: { positionY, positionX }
});
