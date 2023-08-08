import Letter from './Letter';
import React from 'react';
import './СSS/Solution.css'


function Solution({ solution, letterStatus }) {
  return (
     <div className="Solution">
      Word: {solution.word.split('').map((char, index) => {
        const displayChar = letterStatus[char] ? char : '_';
        return <Letter key={index} char={displayChar} />;
      })}
      <div className="Hint">Hint: {solution.hint}</div>
    </div>
  );
}

export default Solution;