export const login = () => ({ type: "LOGIN" });
export const logout = () => ({ type: "LOGOUT" });
export const signUpSuccess = () => ({ type: "SIGNUP_SUCCESS" });
export const signUpFailure = (errors) => ({
  type: "SIGNUP_FAILURE",
  payload: errors,
});
