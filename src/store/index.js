import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers/rootReducers";

const { createStore } = require("redux");

const store = createStore(rootReducers, composeWithDevTools());

export default store;
