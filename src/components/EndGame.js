import React from 'react';
import './СSS/EndGame.css';

function EndGame(props) {
    return (
        <div className="endgame-container">
          <div className="endgame-message">
            {props.score <= 0 ? 
                <>Sorry, you lost! The secret word was: {props.word}</>
                :
                <>Congratulations! You guessed the word!</>
            }
          </div>
          <button className="restart-button" onClick={props.resetGame}>Restart</button>
        </div>
    );
}

export default EndGame;
