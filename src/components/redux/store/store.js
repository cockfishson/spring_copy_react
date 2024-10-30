import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/auth_reducer";
import cardContentReducer from "../reducers/card_content_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cardContent: cardContentReducer,
});

const store = createStore(rootReducer);

export default store;
