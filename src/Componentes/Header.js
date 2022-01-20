import React from 'react';

export default function Header() {
  // if(localStorage.getItem(scoreP1) == null) {
  //   let scoreP1 = 0;
  // }
  return (<header id="head">
      <h1 className="title">Jogo da velha</h1>
      <div className="score">
          <h3 className="scoreTitle">Score:</h3>
          <div className="result">
            <div className="player">
                <p>Player 1:</p>
              <span>{}</span>
            </div>
            <div className="player">
                <p>Player 2:</p>
                <span>0</span>
            </div>
          </div>
      </div>
  </header>);
}
