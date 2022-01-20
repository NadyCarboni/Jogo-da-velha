import React, {useState} from 'react';
import Space from './Space';

export default function Board() {
    // Estado pra ve

    let arrNum = Array(9).fill(null);
    const [space, setSpace] = useState(arrNum);
    const [X, setX] = useState(true); // Começa com o x, então o estado inicia em true
    
    const renderSpace= (i) => {
        return(
            <Space value={space[i]} onClick = {() => handleClick(i)}/>
        )
    }

    const handleClick = (i) => {
        const inner = space.slice();
        if (inner[i] === null){
                if(X){
                    inner[i] = 'x';
                    setX(false);
                } else {
                    inner[i] = 'o';
                    setX(true);
                }

            setSpace(inner);
        } else {
            // tratar exeção
            alert("Não é possível clicar em um espaço já preenchido!")
        }
    }

   
    
    const win= (inner) => { 
    /* Combinações de vitórias posíveis */
    const vitorias = [
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
    // verifiacação
    for(let i =0; i< vitorias; i++ ) {
        const [space1,space2,space3] = vitorias[i];
        // if (inner[i] )
        // Checar se não está vazio
        // if(inner[i] && s)
    }
      
    }
  
  return  (<div className="board">
 {/* <Space />
 <Space/>
 <Space/>
 <Space/>
 <Space/>
 <Space/>
 <Space/>
 <Space/>
 <Space/> */}
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
