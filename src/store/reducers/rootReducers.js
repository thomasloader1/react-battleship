import selectCellReducer from "./selectCellReducer";
import boardReducer from "./boardReducer";
import playerReducer from "./playerReducer";
import shipReducer from "./shipReducer";
import battleshipReducer from "./battleshipReducer";

const { combineReducers } = require("redux");

const rootReducers = combineReducers({
  selectCellReducer,
  boardReducer,
  playerReducer,
  shipReducer,
  battleshipReducer
});

export default rootReducers;
