const initialLoginFormContntent = {
  headerForm: "Login",
  inputUsername: "Enter username",
  inputPassword: "Enter password",
  submitButton: "Submit",
};

const initialFormState = {
  loginForm: initialLoginFormContntent,
};

const formContentReducer = (state = initialFormState, action) => {
  return state;
};

export default formContentReducer;
