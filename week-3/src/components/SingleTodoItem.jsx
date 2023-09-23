import "./styles.css";

const SingleTodoItem = ({ id, todoContent, handleDelete }) => {
  return (
    <div className="singleTodo">
      <span className="text">
        {id} - {todoContent}
      </span>
      <button className="btn" onClick={() => handleDelete(id)}>
        Done
      </button>
    </div>
  );
};

export default SingleTodoItem;
