const initialAuthState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  isSignupSuccessful: false,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    case "SIGNUP_SUCCESS":
      return { ...state, isSignupSuccessful: true };
    default:
      return state;
  }
};

export default authReducer;
