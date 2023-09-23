import SingleTodoItem from "./SingleTodoItem";

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
        <SingleTodoItem
          key={todo.id}
          id={todo.id}
          todoContent={todo.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
