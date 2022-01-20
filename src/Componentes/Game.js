import React from 'react';
import Board from './Board';

export default function Game() {
    


  return (<section id="game">
      <div className="user-box">
     <i className="fas fa-user-alt fa-2x user1"></i>
     </div>
     <Board />
      <div className="user-box">
     <i className="fas fa-user-alt fa-2x user2"></i>
     </div>
  </section>);
}
