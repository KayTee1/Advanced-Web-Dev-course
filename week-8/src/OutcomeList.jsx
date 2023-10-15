import './OutcomeList.css'
const OutcomeList = ({ outcomeList, removeOutcome }) => {

  const outcomesElement = () => {
    return (
      <ul className="todo-list">
          {outcomeList.map((entry) => (
            <div className="todo" key={entry.id}>
              <div className='todo-item'> {entry.text} </div>
              <button
                className="delete-button"
                onClick={() => {
                  removeOutcome(entry);
                }}
              >
                🗑️
              </button>
            </div>
          ))}
        </ul>
    )
  };

  return (
    <>
      {}
      {outcomeList?.length > 0 ? outcomesElement()
       : (
        <div className="empty">
          <p>No outcomes found</p>
        </div>
      )}
    </>
  );
};

export default OutcomeList;
