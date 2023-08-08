import React from 'react';
import Letter from './Letter';
import './СSS/Letters.css'

function Letters({ letterStatus, selectLetter }) {

  const allLetters = Object.keys(letterStatus);

  return (
    <div className="Letters">
    {allLetters.map((char) => (
      <Letter key={char} char={char} selected={letterStatus[char]} selectLetter={selectLetter} />
    ))}
  </div>
  );
}

export default Letters;
