import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App({ todoItems }) {
  const [todos, setTodos] = useState(todoItems);

  return (
    <div className="container">
      <h1>My ToDo List</h1>
      <p>Keeping track of things since 2023!</p>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
