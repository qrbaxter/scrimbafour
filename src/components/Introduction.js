

import React from "react";

export default function Introduction(props) {
  return (
    <div className="introduction">
      <div className="app-container">
    
        <h1 className="app-title">Quizzical</h1>
        <h2 className="app-subtitle">
          Test your culture with this amazing trivia
        </h2>
        {/* Function passed as props from App component */}
        <button className="btn btn-main" onClick={() => props.handleClick()}>
          Start Quiz
        </button>
       
      </div>
    </div>
  );
}