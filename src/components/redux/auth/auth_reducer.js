const initialLoginState = {
  isAuthenticated: false,
};

const authReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: action.payload.success };
    case "LOGOUT":
      return { ...state, isAuthenticated: action.payload.success };
    default:
      return state;
  }
};

export default authReducer;
