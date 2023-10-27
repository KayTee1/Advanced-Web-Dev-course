// Add the correct import
import { useState, useRef } from "react";

const AlertUser = () => {
  const [inputText, setInputText] = useState("");

  // create the hook
  const inputRef = useRef();

  const showAlert = () => {
    // call browser alert method with the correct value
    alert(inputRef.current.value);
    setInputText("");
  };

  //Fix the input to use the hook
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        ref={inputRef}
      />
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
};

export default AlertUser;
