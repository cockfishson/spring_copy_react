const initialAuthState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  signUpErrors: {},
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    case "SIGNUP_SUCCESS":
      return { ...state, signUpErrors: {} };
    case "SIGNUP_FAILURE":
      return { ...state, signUpErrors: action.payload };
    default:
      return state;
  }
};

export default authReducer;
