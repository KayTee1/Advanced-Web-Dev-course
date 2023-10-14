import { useState } from "react";
import LearningOutcomes from "./components/LearningOutcomes";
import OutcomeInput from "./components/OutcomeInput";
import "./App.css";

function App({ outcomes: oc }) {
  const [outcomes, setOutcomes] = useState(oc);
  const [outcome, setOutcome] = useState("");

  const handleAddOutcome = (e) => {
    e.preventDefault();

    if (outcome) {
      setOutcomes([...outcomes, { id: outcomes.length + 1, text: outcome }]);
      setOutcome("");
    }
  };
  return (
    <div className="my_div">
      <h1>Learning React Events</h1>
      <p>Learning outcomes for this week:</p>
      <div className="container">
        <LearningOutcomes key={outcomes.id} outcomes={outcomes} />
        <OutcomeInput
          handleAddOutcome={handleAddOutcome}
          outcome={outcome}
          setOutcome={setOutcome}
        />
      </div>
    </div>
  );
}
export default App;
