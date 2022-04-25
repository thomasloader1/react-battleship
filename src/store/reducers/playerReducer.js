import { SET_USERNAME, SET_PLAYER_SHIP } from "../actions/playerAction";

const defaultPlayerState = {
  name: "Player",
  ships: []
};

// eslint-disable-next-line default-param-last
const playerReducer = (state = defaultPlayerState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        name: action.payload
      };
    }
    case SET_PLAYER_SHIP: {
      return {
        ...state,
        ships: state.ships.push(action.payload)
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
