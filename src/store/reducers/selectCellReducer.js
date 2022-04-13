import { SELECT_CELL } from "../actions/selectCellAction";

const selectCellState = {
  x: 0,
  y: 0
};

// eslint-disable-next-line default-param-last
const selectCellReducer = (state = selectCellState, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        x: action.payload.positionX,
        y: action.payload.positionY
      };
    }
    default:
      return state;
  }
};

export default selectCellReducer;
