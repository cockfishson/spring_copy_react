import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/auth/auth_actions";
import { useNavigate } from "react-router-dom";
import "./signup_form.css";
import AuthFormInput from "../../login_page/login_form/auth_form_input/auth_form_input";
import AuthFormHeader from "../../login_page/login_form/auth_form_header/auth_form_header";
import SubmitButtonForm from "../../login_page/login_form/submit_button_form/submit_button_form";

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
    navigate("/login");
  };

  return (
    <form className="signup_form" onSubmit={handleSubmit}>
      <AuthFormHeader formHeader="Sign Up" />
      <fieldset className="signup_form_input_area">
        <AuthFormInput
          name="username"
          placeholderValue="Username"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="password"
          placeholderValue="Password"
          type="password"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="confirmPassword"
          placeholderValue="Confirm Password"
          type="password"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="firstName"
          placeholderValue="First Name"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="lastName"
          placeholderValue="Last Name"
          onChange={handleInputChange}
        />
        <AuthFormInput
          name="age"
          placeholderValue="Age"
          type="number"
          onChange={handleInputChange}
        />
      </fieldset>
      <SubmitButtonForm buttonText="Sign Up" type="submit" />
    </form>
  );
};

export default SignupForm;
