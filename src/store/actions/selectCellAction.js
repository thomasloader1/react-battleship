export const SELECT_CELL = "SELECT_CELL";
export const selectCellAction = (positionY, positionX) => ({
  type: SELECT_CELL,
  payload: { positionY, positionX }
});
