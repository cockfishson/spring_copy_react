import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const isSignedUp = useSelector((state) => state.auth.isSignupSuccessful);

  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessages = await dispatch(signupUser(signupData));
    setErrors(errorMessages || {});
  };

  useEffect(() => {
    if (isSignedUp) {
      navigate(ROUTES.LOGIN);
    }
  }, [isSignedUp, navigate]);

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
        {errors.username && <p className="error-message">{errors.username}</p>}

        <AuthFormInput
          name="password"
          placeholderValue={signupFormContent.inputPassword}
          type="password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <AuthFormInput
          name="confirmPassword"
          placeholderValue={signupFormContent.inputRepeatPasswort}
          type="password"
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className="error-message">{errors.confirmPassword}</p>
        )}

        <AuthFormInput
          name="firstName"
          placeholderValue={signupFormContent.inputName}
          onChange={handleInputChange}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}

        <AuthFormInput
          name="lastName"
          placeholderValue={signupFormContent.inputSurname}
          onChange={handleInputChange}
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}

        <AuthFormInput
          name="age"
          placeholderValue={signupFormContent.inputAge}
          type="number"
          onChange={handleInputChange}
        />
        {errors.age && <p className="error-message">{errors.age}</p>}
      </fieldset>

      <ButtonForm buttonText={signupFormContent.submitButton} type="submit" />
      <ButtonForm
        buttonText={signupFormContent.switchButton}
        type="button"
        onClick={redirectToLogin}
      />
    </form>
  );
};

export default SignupForm;
