const OutcomeInput = ({ handleAddOutcome, outcome, setOutcome }) => {
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAddOutcome(e);
        }}
      >
        <input
          type="input"
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          placeholder="Enter a new Outcome"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OutcomeInput;
