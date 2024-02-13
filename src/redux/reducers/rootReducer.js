// rootReducer.js

import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import searchResultsReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;
