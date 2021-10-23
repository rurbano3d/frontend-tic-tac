/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

const useGameState = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
  const [currentBoard,setCurrentBoard] = useState(Array(9).fill(null))
  const computeMove = (nextPlayer: Player, squareId: any) => {
    if (nextPlayer === 'X') {
      currentBoard[squareId] = "❌";
      setNextPlayer('O');
    } else {
      currentBoard[squareId] = "⭕";
      setNextPlayer('X');
    }
    
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  }

  const cleanBoard = () =>{
    setCurrentBoard(Array(9).fill(null));
    setStepNumber(0);
  }

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    cleanBoard,
    computeMove
  }
}

export default useGameState;
