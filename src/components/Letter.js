import React from 'react';
import './СSS/Letter.css'

function Letter({ char, selected, selectLetter }) {
  const className = selected ? 'Letter selected' : 'Letter';

  const handleClick = () => {
    if (selectLetter && !selected) {
      selectLetter(char);
    }
  };

  return (
    <span className={className} onClick={handleClick}>
      {char}
    </span> 
  );
}

export default Letter;
