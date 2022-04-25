import {
  PLACE_SHIP,
  SET_SHIP,
  CHANGE_ORIENTATION,
  UNSELECT_SHIP
} from "../actions/shipAction";

const defaultShipState = {
  shipType: null,
  space: 0,
  orientation: "Horizontally",
  start: 0,
  end: 0
};

// eslint-disable-next-line default-param-last
const shipReducer = (state = defaultShipState, action) => {
  switch (action.type) {
    case UNSELECT_SHIP: {
      return {
        ...state,
        shipType: null,
        space: 0,
        orientation: "Horizontally",
        start: null,
        end: null
      };
    }
    case PLACE_SHIP: {
      return {
        ...state,
        shipType: action.payload.shipType,
        space: action.payload.space,
        orientation: action.payload.orientation,
        start: action.payload.start,
        end: action.payload.end
      };
    }
    case SET_SHIP: {
      return {
        ...state,
        shipType: action.payload.shipType,
        space: action.payload.space,
        orientation: action.payload.orientation,
        start: action.payload.start,
        end: action.payload.end
      };
    }
    case CHANGE_ORIENTATION: {
      return {
        ...state,
        orientation: action.payload
      };
    }
    default:
      return state;
  }
};

export default shipReducer;
