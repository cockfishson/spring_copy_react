import { axiosinstance } from "../api.config";
import { login, logout, signupSuccess } from "./auth_action_types";
import { actionhandleError } from "../../../utils/action_error_handler";
export const loginCheck = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axiosinstance.post("/auth/login", {
        username,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(login());
    } catch (error) {
      actionhandleError(error);
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

export const signupUser = ({
  username,
  password,
  confirmPassword,
  firstName,
  lastName,
  age,
}) => {
  return async (dispatch) => {
    try {
      await axiosinstance.post("/auth/signup", {
        username,
        password,
        confirmPassword,
        firstName,
        lastName,
        age,
      });
      dispatch(signupSuccess());
    } catch (error) {
      console.warn(error.message);
      actionhandleError(error);
    }
  };
};
