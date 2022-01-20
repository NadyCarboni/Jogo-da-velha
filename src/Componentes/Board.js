import React, {useState} from 'react';
import Space from './Space';

export default function Board() {
    // Estado pra ve

    let arrNum = Array(9).fill(null);
    const [space, setSpace] = useState(arrNum);
    const [X, setX] = useState(true); // Começa com o x, então o estado inicia em true
    const [pointsP1, setPointsP1] = useState(0);
    const [pointsP2, setPointsP2] = useState(0);

    const vencedor = win(space); 
    let score;
    
    if(vencedor) {
        score = vencedor;
            if (score === '×') {
                console.log('x')
            } else if (score === 'o') {
                console.log('0')
            } 
    } else {
         // verifica se tem elementos vazios
            if (space.every(verificar)) {
                console.log('velha')
            }
    }
    const renderSpace= (i) => {
        return (
            <Space value={space[i]} onClick = {() => handleClick(i)}/>
        );
    }

    const handleClick = (i) => {
        const inner = space.slice();
        if (inner[i] === null){
                if(X){
                    inner[i] = '×';
                    setX(false);
                    // efeito de mostrar em quem está o turno, para melhor experiência do usuário
                    document.getElementById("x-turn").classList.remove('glow');
                    document.getElementById("o-turn").classList.add('glow');

                } else {
                    inner[i] = 'o';
                    setX(true);
                     // efeito de mostrar em quem está o turno, para melhor experiência do usuário
                    document.getElementById("x-turn").classList.add('glow');
                    document.getElementById("o-turn").classList.remove('glow');
                }
                setSpace(inner);
        } else {
            // tratar exeção
            alert("Não é possível clicar em um espaço já preenchido!")
        }
    }

   // verifica se tem elementos vazios
    function verificar(element) {
        return element != null;
    }
    
   function win(inner){ 
    /* Combinações de vitórias posíveis */
    const possibilidades = [
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // diagonal
        [0, 4, 8],
        [2, 4, 6],
    ]
    // verificação
    for(let i = 0; i< possibilidades.length; i++ ) {
        const [space1,space2,space3] = possibilidades[i]; // desestruturação

        // Checar se não está vazio e ver se são todos x's e o's
        if(inner[space1] && inner[space1] === inner[space2] && inner[space2] === inner[space3]) {
            return inner[space1];
        } 
    }
      return null;
    }
  
  return  (<div className="board">

 {renderSpace(0)}
 {renderSpace(1)}
 {renderSpace(2)}
 {renderSpace(3)}
 {renderSpace(4)}
 {renderSpace(5)}
 {renderSpace(6)}
 {renderSpace(7)}
 {renderSpace(8)}
 

</div>);
}
