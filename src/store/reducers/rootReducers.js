import thunk from "redux-thunk";
import { combineReducers, applyMiddleware } from "redux";
import selectCellReducer from "./selectCellReducer";
import boardReducer from "./boardReducer";
import playerReducer from "./playerReducer";
import shipReducer from "./shipReducer";
import battleshipReducer from "./battleshipReducer";

const rootReducers = combineReducers(
  {
    selectCellReducer,
    boardReducer,
    playerReducer,
    shipReducer,
    battleshipReducer
  },
  applyMiddleware(thunk)
);

export default rootReducers;
