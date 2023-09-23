import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const todoItems = [
  {
    id: 1,
    text: "Learn essential JS for React",
  },
  {
    id: 2,
    text: "Learn React Basics & Working with Components",
  },
  {
    id: 3,
    text: "Learn about React State & Working with Events",
  },
  {
    id: 4,
    text: "Learn to Render Lists & Conditional Content",
  },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App todoItems={todoItems} />
  </React.StrictMode>
);
