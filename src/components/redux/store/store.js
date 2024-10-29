import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/auth_reducer";
import formContentReducer from "../reducers/form_content_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  formContent: formContentReducer,
});

const store = createStore(rootReducer);

export default store;
