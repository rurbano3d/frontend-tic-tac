/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

let currentBoard = Array(9).fill(null);
const useGameState = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
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

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove
  }
}

export default useGameState;
