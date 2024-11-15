import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/auth/auth_actions";
import { useNavigate } from "react-router-dom";
import "./sign_up_form.css";
import AuthFormInput from "../../login_page/login_form/auth_form_input/auth_form_input";
import AuthFormHeader from "../../login_page/login_form/auth_form_header/auth_form_header";
import ButtonForm from "../../login_page/login_form/submit_button_form/button_form";
import { ROUTES } from "../../../routes";
import { signUpFormContent } from "../../../data/sign_up_form_content";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const errors = useSelector((state) => state.auth.signUpErrors);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(signUpData, navigate));
  };

  const redirectToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <form className="sign_up_form" onSubmit={handleSubmit}>
      <AuthFormHeader formHeader={signUpFormContent.headerForm} />
      <fieldset className="sign_up_form_input_area">
        <AuthFormInput
          name="username"
          placeholderValue={signUpFormContent.inputUsername}
          onChange={handleInputChange}
        />
        {errors.username && <p className="error-message">{errors.username}</p>}

        <AuthFormInput
          name="password"
          placeholderValue={signUpFormContent.inputPassword}
          type="password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <AuthFormInput
          name="confirmPassword"
          placeholderValue={signUpFormContent.inputRepeatPassword}
          type="password"
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className="error-message">{errors.confirmPassword}</p>
        )}

        <AuthFormInput
          name="firstName"
          placeholderValue={signUpFormContent.inputName}
          onChange={handleInputChange}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}

        <AuthFormInput
          name="lastName"
          placeholderValue={signUpFormContent.inputSurname}
          onChange={handleInputChange}
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}

        <AuthFormInput
          name="age"
          placeholderValue={signUpFormContent.inputAge}
          type="number"
          onChange={handleInputChange}
        />
        {errors.age && <p className="error-message">{errors.age}</p>}
      </fieldset>
      {errors.form && <p className="error-message">{errors.form}</p>}
      <ButtonForm buttonText={signUpFormContent.submitButton} type="submit" />
      <ButtonForm
        buttonText={signUpFormContent.switchButton}
        type="button"
        onClick={redirectToLogin}
      />
    </form>
  );
};

export default SignUpForm;
