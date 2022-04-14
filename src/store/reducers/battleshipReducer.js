import {
  GET_SHIPS,
  CHANGE_ORIENTATION,
  SELECT_SHIP
} from "../actions/battleshipAction";

const battleshipConfigState = {
  ships: [
    {
      type: "carrier",
      space: 4,
      quantity: 1
    },
    {
      type: "cruiser",
      space: 3,
      quantity: 3
    },
    {
      type: "submarine",
      space: 2,
      quantity: 1
    }
  ],
  orientation: "Horizontally",
  shipSelected: "Select a ship"
};

// eslint-disable-next-line default-param-last
const battleshipReducer = (state = battleshipConfigState, action) => {
  switch (action.type) {
    case GET_SHIPS: {
      return {
        ...state
      };
    }
    case CHANGE_ORIENTATION: {
      return {
        ...state,
        orientation: action.payload
      };
    }
    case SELECT_SHIP: {
      return {
        ...state,
        shipSelected: action.payload
      };
    }
    default:
      return state;
  }
};

export default battleshipReducer;
