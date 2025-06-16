import React from "react";
import "../styles/Card.css";

function SystemCard({ title, content }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <ul className="card-content">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SystemCard;
