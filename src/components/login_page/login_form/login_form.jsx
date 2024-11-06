import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck } from "../../redux/auth/auth_actions";
import { useNavigate } from "react-router-dom";
import "./login_form.css";
import LoginFormHeader from "./login_form_header/login_form_header";
import LoginFormInput from "./login_form_input/login_form_input";
import SubmitButtonForm from "./submit_button_form/submit_button_form";
import { loginFormContent } from "../../../data/login_form_content";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
    dispatch(loginCheck(credentials.username, credentials.password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <LoginFormHeader formHeader={loginFormContent.headerForm} />
      <fieldset className="login_form_input_area">
        <LoginFormInput
          name="username"
          placeholderValue={loginFormContent.inputUsername}
          onChange={handleInputChange}
        />
        <LoginFormInput
          name="password"
          placeholderValue={loginFormContent.inputPassword}
          type="password"
          onChange={handleInputChange}
        />
      </fieldset>
      <SubmitButtonForm
        buttonText={loginFormContent.submitButton}
        type="submit"
      />
    </form>
  );
};

export default LoginForm;
