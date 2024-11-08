import { login, logout } from "./auth_action_types";

export const loginCheck = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();

      if (result.success) {
        dispatch(login());
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Server connection error:", error);
      dispatch(logout());
    }
  };
};
