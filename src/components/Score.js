import React from 'react';
import './СSS/Score.css';

function Score({ score }) {
    let scoreClass;
    if (score >= 80) {
        scoreClass = "high-score";
    } else if (score >= 50) {
        scoreClass = "medium-score";
    } else {
        scoreClass = "low-score";
    }

    return (
        <div className={`Score ${scoreClass}`}>
            Score: {score}
        </div>
    );
}

  
  export default Score;