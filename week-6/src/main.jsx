import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const outcomes = [
  {
    id: 1,
    text: "Can listen and handle events in React",
  },
  {
    id: 2,
    text: "Can work with state and use the useState hook",
  },
  {
    id: 3,
    text: "Can listen to forms inputs in React",
  },
  {
    id: 4,
    text: "Can use forms inputs and state React",
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App outcomes = {outcomes}/>
  </React.StrictMode>,
)
