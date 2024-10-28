import { LoginFormInput } from "../login_form_input/login_form_input";
import { FORM_CONTENT } from "../../../data/form_content";
import "./login_form.css";
import LoginFormHeader from "./login_form_header/login_form_header";
import SubmitButtonForm from "./submit_button_form/submit_button_form";
export const LoginForm = () => {
  return (
    <div className="login_form">
      <LoginFormHeader formHeader={FORM_CONTENT.headerForm} />
      <div className="login_form_input_area">
        <LoginFormInput placeholderValue={FORM_CONTENT.inputUsername} />
        <LoginFormInput placeholderValue={FORM_CONTENT.inputPassword} />
      </div>
      <SubmitButtonForm buttonText={FORM_CONTENT.submitButton} />
    </div>
  );
};

export default LoginForm;
