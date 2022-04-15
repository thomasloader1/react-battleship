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
        ships: state.ships.map((ship) => {
          console.log(action);
          return ship.type === action.payload.ship.type
            ? action.payload.ship
            : action.payload.ship;
        })
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
