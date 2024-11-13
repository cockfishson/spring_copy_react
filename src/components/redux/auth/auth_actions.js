import { instance } from "../api.config";
import { login, logout } from "./auth_action_types";

export const loginCheck = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/auth/login", {
        username,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(login());
    } catch (error) {
      if (error.response) {
        console.error(
          `${error.response.status} - ${error.response.data.message}`
        );
        alert(`${error.response.status} - ${error.response.data.message}`);
      } else {
        console.error("Server connection error:", error.message);
        alert("A server connection error occurred. Please try again later.");
      }
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());
    window.location.href = "/login";
  };
};
