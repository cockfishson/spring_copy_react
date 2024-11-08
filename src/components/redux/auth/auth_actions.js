import { login } from "./auth_action_types";
import axios from "axios";

export const loginCheck = (username, password) => {
  return async (dispatch) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      });
      dispatch(login());
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
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
