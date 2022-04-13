import { SET_USERNAME } from "../actions/namePlayerAction";

const defaultUsernameState = {
  name: "Player"
};

// eslint-disable-next-line default-param-last
const namePlayerReducer = (state = defaultUsernameState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        name: action.payload
      };
    }
    default:
      return state;
  }
};

export default namePlayerReducer;
