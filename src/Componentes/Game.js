import React from 'react';
import Board from './Board';

export default function Game() {
  return (
  <section id="game">
      <div className="turn">
          <h3>Turn:</h3>
          <div className="turn-box">
            <i id="x-turn" className="fas fa-times fa-2x glow"></i>
            <i id="o-turn"className="far fa-circle fa-2x "></i>
            </div>
     </div>
     <Board/>
  </section>);
}
