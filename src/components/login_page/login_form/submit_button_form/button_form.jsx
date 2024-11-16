import "./button_form.css";

export const ButtonForm = ({ buttonText, type = "button", onClick }) => {
  return (
    <button className="submit_button_form" type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ButtonForm;
