import selectCellReducer from "./selectCellReducer";
import boardReducer from "./boardReducer";
import namePlayerReducer from "./namePlayerReducer";
import shipReducer from "./shipReducer";
import battleshipReducer from "./battleshipReducer";

const { combineReducers } = require("redux");

const rootReducers = combineReducers({
  selectCellReducer,
  boardReducer,
  namePlayerReducer,
  shipReducer,
  battleshipReducer
});

export default rootReducers;
