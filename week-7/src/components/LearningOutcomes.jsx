import "./LearningOutcomes.css";
const LearningOutcomes = ({
  outcomes,
  handleDeleteOutcome,
  handleStrikeOutcome,
}) => {
  return (
    <div>
      {outcomes.map((outcome) => (
        <div className="outcomes" key={outcome.id}>
          <div className="text-id-container">
            <span className="id">{outcome.id}</span>
            {outcome.checked ? (
              <span className="text">
                <s>{outcome.text}</s>
              </span>
            ) : (
              <span className="text">{outcome.text}</span>
            )}
          </div>
          <div className="buttons">
            <span
              className="check"
              onClick={() => handleStrikeOutcome(outcome.id)}
            >
              -
            </span>
            <span
              className="delete"
              onClick={() => handleDeleteOutcome(outcome.id)}
            >
              x
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningOutcomes;
