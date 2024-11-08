import { login } from "./auth_action_types";
import axios from "axios";

export const loginCheck = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      if (result.success) {
        dispatch(login());
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 401
      ) {
        console.error("Unauthorized: Incorrect username or password.");
        alert("Incorrect username or password. Please try again.");
      } else {
        console.error("Server connection error:", error.message);
        alert("A server connection error occurred. Please try again later.");
      }
    }
  };
};
