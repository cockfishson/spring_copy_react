import { useDispatch, useSelector } from "react-redux";
import { loginCheck } from "../../redux/actions/actions";
import LoginFormHeader from "./login_form_header/login_form_header";
import LoginFormInput from "./login_form_input/login_form_input";
import SubmitButtonForm from "./submit_button_form/submit_button_form";
import { useState } from "react";
import "./login_form.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.formContent.loginForm);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = loginCheck(username, password);
    dispatch(action);
  };

  return (
    <div className="login_form">
      <LoginFormHeader formHeader={formContent.headerForm} />
      <div className="login_form_input_area">
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
      </div>
      <SubmitButtonForm
        buttonText={formContent.submitButton}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default LoginForm;
