import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "../auth/auth_reducer";
import cardContentReducer from "../card/card_content_reducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  auth: authReducer,
  cardContent: cardContentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
