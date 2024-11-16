import { axiosInstance } from "../api.config";
import axios from "axios";
import {
  login,
  logout,
  signUpSuccess,
  signUpFailure,
} from "./auth_action_types";
import { actionHandleError } from "../../../utils/action_error_handler";
import { ROUTES } from "../../../routes";

export const loginCheck = (username, password, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(login());
      navigate(ROUTES.HOME);
    } catch (error) {
      actionHandleError(error);
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

export const signUpUser = (signupData, navigate) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        signupData
      );
      dispatch(signUpSuccess());
      navigate(ROUTES.LOGIN);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessages = error.response.data.details || {
          form: error.response.data.message,
        };
        dispatch(signUpFailure(errorMessages));
      } else {
        actionHandleError(error);
      }
    }
  };
};
