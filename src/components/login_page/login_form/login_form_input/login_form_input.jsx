import "./login_form_input.css";

export const LoginFormInput = ({
  name,
  placeholderValue,
  type = "text",
  onChange,
}) => {
  return (
    <input
      className="login_form_input"
      name={name}
      placeholder={placeholderValue}
      type={type}
      onChange={onChange}
    />
  );
};

export default LoginFormInput;
