import { axiosinstance } from "../api.config";
import { login, logout } from "./auth_action_types";
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
  firstName,
  lastName,
  age,
}) => {
  //roughly ho this should look like at the end when I get my hands to backend
  // return async (dispatch) => {
  //   try {
  //     await instance.post("/auth/signup", {
  //       username,
  //       password,
  //       firstName,
  //       lastName,
  //       age,
  //     });
  //     alert("Signup successful! Please log in.");
  //   } catch (error) {
  //     actionhandleError(error)
  //   }
  // };
  console.warn(username + password + firstName + lastName + age); //just so values are used somewhere
  return () => {};
};
