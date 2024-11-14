import "./submit_button_form.css";

export const SubmitButtonForm = ({ buttonText, type = "button", onClick }) => {
  return (
    <button className="submit_button_form" type={type} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default SubmitButtonForm;
