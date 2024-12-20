import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginCheck } from "../../redux/auth/auth_actions";
import { useNavigate } from "react-router-dom";
import "./login_form.css";
import AuthFormHeader from "./auth_form_header/auth_form_header";
import AuthFormInput from "./auth_form_input/auth_form_input";
import ButtonForm from "./submit_button_form/button_form";
import { loginFormContent } from "../../../data/login_form_content";
import { ROUTES } from "../../../routes";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCheck(credentials.username, credentials.password, navigate));
  };

  const redirectToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <AuthFormHeader formHeader={loginFormContent.headerForm} />
      <fieldset className="login_form_input_area">
        <AuthFormInput
          name="username"
          placeholderValue={loginFormContent.inputUsername}
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="password"
          placeholderValue={loginFormContent.inputPassword}
          type="password"
          onChange={handleInputChange}
        />
      </fieldset>
      <ButtonForm buttonText={loginFormContent.submitButton} type="submit" />
      <ButtonForm
        buttonText={loginFormContent.switchButton}
        type="button"
        onClick={redirectToSignUp}
      />
    </form>
  );
};

export default LoginForm;
