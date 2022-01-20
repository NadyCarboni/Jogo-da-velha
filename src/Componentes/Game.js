import React from 'react';
import Board from './Board';

export default function Game() {
    


  return (<section id="game">
      <div className="user-box">
     <i id="x-turn" className="fas fa-times fa-2x glow"></i>
     </div>
     {/* <div className="playing-box"> */}
     <Board />
     {/* <button className='Replay'>Replay</button></div> */}
      <div className="user-box">
     <i id="o-turn"className="far fa-circle fa-2x "></i>
     </div>
  </section>);
}
