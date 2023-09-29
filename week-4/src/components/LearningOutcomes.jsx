import "./styles.css";
const LearningOutcomes = ({ outcomes }) => {
  return (
    <div>
      {outcomes.map((outcome) => (
        <div className="outcomes" key={outcome.id}>
          <span className="id">{outcome.id}</span>
          <span className="text">{outcome.text}</span>
        </div>
      ))}
    </div>
  );
};


export default LearningOutcomes;
