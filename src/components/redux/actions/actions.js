import { login, logout } from "../reducers/auth_reducer";

export const loginCheck = (username, password) => {
  return username === "admin" && password === "1234" ? login() : logout();
};
