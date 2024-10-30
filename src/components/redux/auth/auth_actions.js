import { login, logout } from "./auth_action_types";
import store from "../store/store";

export const loginCheck = (username, password) => {
  const users = store.getState().auth.users;
  const userFound = users.find(
    (user) => user.username === username && user.password === password
  );
  return userFound ? login() : logout();
};
