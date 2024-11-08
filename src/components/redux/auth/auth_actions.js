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
      console.error(error.response.data);
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
