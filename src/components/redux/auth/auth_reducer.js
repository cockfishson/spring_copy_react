const initialLoginState = {
  isAuthenticated: false,
};

const authReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
