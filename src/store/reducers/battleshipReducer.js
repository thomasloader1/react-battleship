import {
  GET_SHIPS,
  CHANGE_ORIENTATION,
  SELECT_SHIP,
  UNSELECT_SHIP,
  DECREMENT_SHIP_UNIT
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
  shipSelected: null
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
    case UNSELECT_SHIP: {
      return {
        ...state,
        shipSelected: action.payload
      };
    }
    case DECREMENT_SHIP_UNIT: {
      return {
        ...state,
        ships: state.ships.map((ship) =>
          ship.type === action.payload.type
            ? { ...ship, quantity: action.payload.quantity - 1 }
            : ship
        )
      };
    }
    default:
      return state;
  }
};

export default battleshipReducer;
