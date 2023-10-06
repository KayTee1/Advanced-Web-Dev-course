import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const OUTCOME_DATA = [
  {
    id: 1,
    text: "Can use the JS array map method",
    checked: false
  },
  {
    id: 2,
    text: "Can render lists in React dynamically",
    checked: false
  },
  {
    id: 3,
    text: "Can use stateful list",
    checked: false
  },
  {
    id: 4,
    text: "Understand and can use keys when rendering lists",
    checked: false
  },
  {
    id: 5,
    text: "Can use the ternary opertator",
    checked: false
  },
  {
    id: 6,
    text: "Can show content conditionally",
    checked: false
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App OUTCOME_DATA={OUTCOME_DATA} />
  </React.StrictMode>
);
