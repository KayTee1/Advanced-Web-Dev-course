import React from "react";
import "./styles.css";

const DataCard = ({ title, body }) => {
  return (
    <div className="card">
      <div className="data-title">{title}</div>
      <div className="data-body">{body}</div>
    </div>
  );
};

export default DataCard;
