import { SHOOT_CELL } from "../actions/shootCellAction";

const defaultBoardState = {
  columns: 10,
  rows: 10,
  shootY: 0,
  shootX: 0
};

// eslint-disable-next-line default-param-last
const boardReducer = (state = defaultBoardState, action) => {
  switch (action.type) {
    case SHOOT_CELL: {
      return {
        ...state,
        shootX: action.payload.positionX,
        shootY: action.payload.positionY
      };
    }
    default:
      return state;
  }
};

export default boardReducer;
