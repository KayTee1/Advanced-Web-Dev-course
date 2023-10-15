import { useState } from "react";
import LearningOutcomes from "./components/LearningOutcomes";
import OutcomeInput from "./components/OutcomeInput";
import "./App.css";

function App({ OUTCOME_DATA }) {
  const [outcomes, setOutcomes] = useState(OUTCOME_DATA);
  const [outcome, setOutcome] = useState("");
  const [isEmpty, setIsEmpty] = useState(OUTCOME_DATA.length === 0);

  const handleAddOutcome = (e) => {
    e.preventDefault();

    if (outcome) {
      const newId =
        outcomes.length === 0 ? 1 : outcomes[outcomes.length - 1].id + 1;
      const newOutcome = { id: newId, text: outcome };
      setOutcomes([...outcomes, newOutcome]);
      setOutcome("");
      setIsEmpty(false);
    }
  };

  const handleDeleteOutcome = (id) => {
    //creating a new array of outcomes except the one we want to delete
    const newOutcomes = outcomes.filter((outcome) => outcome.id !== id);

    //updating the ids so there are no gaps in the middle
    const updatedOutcomes = newOutcomes.map((outcome, index) => ({
      ...outcome,
      id: index + 1,
    }));
    setOutcomes(updatedOutcomes);

    if (outcomes.length === 1) {
      setIsEmpty(true);
    }
  };

  const handleStrikeOutcome = (id) => {
    setOutcomes((prevOutcomes) =>
      //if the argument id matches outcome id => switch the checked property
      prevOutcomes.map((outcome) =>
        outcome.id === id ? { ...outcome, checked: !outcome.checked } : outcome
      )
    );
  };

  return (
    <>
      <h1>Learning React Events</h1>

      <div className="container">
        {isEmpty ? (
          <h2>Add an outcome</h2>
        ) : (
          <>
            <p>Learning outcomes for this week:</p>
            <LearningOutcomes
              outcomes={outcomes}
              handleDeleteOutcome={handleDeleteOutcome}
              handleStrikeOutcome={handleStrikeOutcome}
            />
          </>
        )}
        <OutcomeInput
          handleAddOutcome={handleAddOutcome}
          outcome={outcome}
          setOutcome={setOutcome}
        />
      </div>
    </>
  );
}

export default App;
