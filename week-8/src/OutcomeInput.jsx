import './OutcomeInput.css'
const OutcomeInput = ({ outcome, setOutcome, addOutcome }) => {
  return (
    <div className="input-wrapper">
      <input
        className='input-form'
        type="text"
        name="todo"
        value={outcome}
        placeholder="Add a new outcome"
        onChange={(e) => {
          setOutcome(e.target.value);
        }}
      />
      <button className="add-button" onClick={addOutcome}>
        Add
      </button>
    </div>
  );
};

export default OutcomeInput;
