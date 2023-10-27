import { useState } from "react";
import "./App.css";

const fruitList = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
];

function App() {
  // Set up state hooks for the searchTerm and the filteredFruit
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFruits, setFilteredFruits] = useState([]);

  // Set up a callback hook to prevent the function from being recreated on every render.
  const handleFilter = () => {
    setFilteredFruits(
      fruitList.filter((fruit) => {
        return fruit !== searchTerm;
      })
    );
  };

  return (
    <>
      <h1>Enhancing React with Hooks</h1>
      <div className="card">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a fruit..."
        />
        <button onClick={handleFilter}>🔍 Search</button>

        <ul>
          {filteredFruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
