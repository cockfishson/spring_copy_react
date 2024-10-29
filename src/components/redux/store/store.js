import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/auth_reducer";
import formContentReducer from "../reducers/form_content_reducer";
import cardContentReducer from "../reducers/card_content_reducer";
import headerContentReducer from "../reducers/header_content_reducer";
import titleAreaContentReducer from "../reducers/description_content_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  formContent: formContentReducer,
  cardContent: cardContentReducer,
  headerContent: headerContentReducer,
  titleAreaContent: titleAreaContentReducer,
});

const store = createStore(rootReducer);

export default store;
