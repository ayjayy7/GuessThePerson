import { combineReducers } from "redux";
import movieReducer from "./movie";
const rootReducer = combineReducers({
  movieState: movieReducer
});
export default rootReducer;
