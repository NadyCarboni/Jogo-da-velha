import React from 'react';

export default function Header() {
  return (<header id="head">
      <h1 className="title">Jogo da velha</h1>
      <div className="score">
          <h3 className="scoreTitle">Score:</h3>
          <div className="result">
            <div className="player">
                <p>Player 1:</p>
              <span>0</span>
            </div>
            <div className="player">
                <p>Player 2:</p>
                <span>0</span>
            </div>
          </div>
      </div>
  </header>);
}
