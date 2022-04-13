import { PLACE_SHIP } from "../actions/shipAction";

const defaultShipState = {
  shipType: null,
  space: 0,
  orientation: null,
  start: 0,
  end: 0
};

// eslint-disable-next-line default-param-last
const shipReducer = (state = defaultShipState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default shipReducer;
