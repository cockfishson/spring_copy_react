import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck } from "../../redux/actions/actions";
import "./login_form.css";
import LoginFormHeader from "./login_form_header/login_form_header";
import LoginFormInput from "./login_form_input/login_form_input";
import SubmitButtonForm from "./submit_button_form/submit_button_form";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.formContent.loginForm);

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

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <LoginFormHeader formHeader={formContent.headerForm} />
      <fieldset className="login_form_input_area">
        <LoginFormInput
          name="username"
          placeholderValue={formContent.inputUsername}
          onChange={handleInputChange}
        />
        <LoginFormInput
          name="password"
          placeholderValue={formContent.inputPassword}
          type="password"
          onChange={handleInputChange}
        />
      </fieldset>
      <SubmitButtonForm buttonText={formContent.submitButton} type="submit" />
    </form>
  );
};

export default LoginForm;
