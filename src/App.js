import React, { useState } from 'react';
import logo from './logo.svg';
import Score from './components/Score'
import Solution from './components/Solution'
import Letters from './components/Letters'
import EndGame from './components/EndGame'

const STARTING_SCORE = 100;
const ASCII_A = 65;
const ASCII_Z = 91;

const wordsArray = [
  { word: 'REACT', hint: 'A popular frontend framework' },
  { word: 'DREAM', hint: 'Something you see when asleep'},
  { word: 'PLANT', hint: 'Not an animal'},
  { word: 'SPACE', hint: 'Yuri Gagarin'},
  { word: 'FLIGHT', hint: 'You can only by a plane'}
];


function App() {


  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState(wordsArray[currentWordIndex]);
  const [score, setScore] = useState(STARTING_SCORE); 

  function generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  


  const selectLetter = (letter) => {
    const updatedLetterStatus = { ...letterStatus };
    updatedLetterStatus[letter] = true;
  
    let newScore = score;
    if (solution.word.includes(letter)) {
      newScore += 5;
    } else {
      newScore -= 20;
    }
  
    setScore(newScore); 
    setLetterStatus(updatedLetterStatus);


    if (newScore <= 0 ||solution.word.split('').every(currentLetter => updatedLetterStatus[currentLetter]))
    {
      endGame(); 
    } 
  };
  


  const endGame = () => {
    setLetterStatus(prevStatus => {
        let newStatus = { ...prevStatus };
        for (let letter in newStatus) {
            newStatus[letter] = true;
        }
        return newStatus;
    });
}

  const isGameOver = () => {
    if (score <= 0) return true;
    for (let letter of solution.word) {
      if (!letterStatus[letter]) return false;
    }
    return true;
  }

  const resetGame = () => {
    const newIndex = (currentWordIndex + 1) % wordsArray.length;
    setCurrentWordIndex(newIndex);
    setSolution(wordsArray[newIndex]);
    setLetterStatus(generateLetterStatuses());
    setScore(STARTING_SCORE);
  };


  return (
    <div className="App">
    <Score score={score} />
    <Solution solution={solution} letterStatus={letterStatus} />
    <Letters letterStatus={letterStatus} selectLetter={selectLetter} />
    {isGameOver() && <EndGame score={score} word={solution.word} resetGame={resetGame} />}
  </div>
  );
}

export default App;
