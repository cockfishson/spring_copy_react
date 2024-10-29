import "./submit_button_form.css";

export const SubmitButtonForm = ({ buttonText, onClick }) => {
  return (
    <button className="submit_button_form" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default SubmitButtonForm;
