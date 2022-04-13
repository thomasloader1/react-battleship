import selectCellReducer from "./selectCellReducer";
import boardReducer from "./boardReducer";
import namePlayerReducer from "./namePlayerReducer";
import shipReducer from "./shipReducer";

const { combineReducers } = require("redux");

const rootReducers = combineReducers({
  selectCellReducer,
  boardReducer,
  namePlayerReducer,
  shipReducer
});

export default rootReducers;
