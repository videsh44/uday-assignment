import { combineReducers } from "redux";
import authReducer from "./authReducer";
import textBoxOneReducer from "./textBoxOneReducer";
import textBoxTwoReducer from "./textBoxTwoReducer";

export default combineReducers({
  userAuth: authReducer,
  boxOne: textBoxOneReducer,
  boxTwo: textBoxTwoReducer,
});
