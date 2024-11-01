import "./submit_button_form.css";

export const SubmitButtonForm = ({ buttonText, onSubmit }) => {
  return (
    <button className="submit_button_form" onClick={onSubmit}>
      {buttonText}
    </button>
  );
};

export default SubmitButtonForm;
