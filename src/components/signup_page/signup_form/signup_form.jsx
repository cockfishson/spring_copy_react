import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/auth/auth_actions";
import { useNavigate } from "react-router-dom";
import "./signup_form.css";
import AuthFormInput from "../../login_page/login_form/auth_form_input/auth_form_input";
import AuthFormHeader from "../../login_page/login_form/auth_form_header/auth_form_header";
import ButtonForm from "../../login_page/login_form/submit_button_form/button_form";
import { ROUTES } from "../../../routes";
import { signupFormContent } from "../../../data/signup_form_content";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(signupData));
    navigate(ROUTES.LOGIN);
  };

  const redirectToLogin = (e) => {
    e.preventDefault();
    navigate(ROUTES.LOGIN);
  };

  return (
    <form className="signup_form" onSubmit={handleSubmit}>
      <AuthFormHeader formHeader={signupFormContent.headerForm} />
      <fieldset className="signup_form_input_area">
        <AuthFormInput
          name="username"
          placeholderValue={signupFormContent.inputUsername}
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="password"
          placeholderValue={signupFormContent.inputPassword}
          type="password"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="confirmPassword"
          placeholderValue={signupFormContent.inputRepeatPasswort}
          type="password"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="firstName"
          placeholderValue={signupFormContent.inputName}
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="lastName"
          placeholderValue={signupFormContent.inputSurname}
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="age"
          placeholderValue={signupFormContent.inputAge}
          type="number"
          onChange={handleInputChange}
        />
      </fieldset>
      <ButtonForm buttonText={signupFormContent.submitButton} type="submit" />
      <ButtonForm
        buttonText={signupFormContent.switchButton}
        type="switch"
        onClick={redirectToLogin}
      />
    </form>
  );
};

export default SignupForm;
