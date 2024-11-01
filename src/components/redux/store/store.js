import { createStore, combineReducers } from "redux";
import authReducer from "../auth/auth_reducer";
import cardContentReducer from "../card/card_content_reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  cardContent: cardContentReducer,
});

const store = createStore(rootReducer);

export default store;
