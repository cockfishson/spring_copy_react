import { login, logout } from "./auth_action_types";

export const loginCheck = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.success) {
        dispatch(login());
      } else {
        dispatch(logout());
        alert(result.message);
      }
    } catch (error) {
      console.error("Server connection error:", error);
      dispatch(logout());
    }
  };
};
