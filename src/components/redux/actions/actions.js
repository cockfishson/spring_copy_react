import { login, logout } from "../reducers/auth_reducer";
import store from "../store/store";

export const loginCheck = (username, password) => {
  const users = store.getState().auth.users;
  const userFound = users.find(
    (user) => user.username === username && user.password === password
  );
  return userFound ? login() : logout();
};

export const searchCards = (searchString) => ({
  type: "SET_SEARCH_STRING",
  payload: searchString,
});
