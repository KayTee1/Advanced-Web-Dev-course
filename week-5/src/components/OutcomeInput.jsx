import "./OutcomeInput.css";
const OutcomeInput = ({ handleAddOutcome, outcome, setOutcome }) => {
  return (
    <div>
      <form
        className="learning-outcome-form"
        onSubmit={(e) => {
          handleAddOutcome(e);
        }}
      >
        <input
          className="learning-outcome-form__input"
          type="input"
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          placeholder="Enter a new Outcome"
        />
        <button type="submit" className="learning-outcome-form__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OutcomeInput;
