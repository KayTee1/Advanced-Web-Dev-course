import React, { useState, useCallback } from "react";
import axios from "axios";
import "./styles.css";

const DataInput = ({ appData, setAppData }) => {
  const [textFieldsContent, setTextFieldsContent] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setTextFieldsContent({ ...textFieldsContent, [name]: value });
  };

  const handlePostData = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        //throw new Error("Simulated error");
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          textFieldsContent
        );
        setAppData([...appData, textFieldsContent]);
        setTextFieldsContent({
          title: "",
          body: "",
        });
        setError(null);
      } catch (err) {
        setError("Failed to add post");
      }
      setIsLoading(false);
    },
    [textFieldsContent]
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form className="form">
          <div>
            <input
              className="text-input"
              placeholder="Title"
              onChange={handleTextChange}
              value={textFieldsContent.title}
              name="title"
            ></input>
          </div>
          <div>
            <input
              className="text-input"
              placeholder="Body"
              onChange={handleTextChange}
              value={textFieldsContent.body}
              name="body"
            ></input>
          </div>
          {error != null ? <p style={{ color: "red" }}>{error}</p> : null}
          <button className="postButton" onClick={handlePostData}>
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default DataInput;
