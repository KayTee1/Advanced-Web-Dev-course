import "./styles.css";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <div className="singleTodo" key={todo.id}>
          <span className="text">
            {todo.id} - {todo.text}
          </span>
          <button className="btn" onClick={() => handleDelete(todo.id)}>
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
