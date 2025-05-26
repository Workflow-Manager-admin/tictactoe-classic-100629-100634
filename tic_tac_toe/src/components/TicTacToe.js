import React, { useState } from 'react';
import Board from './Board';
import './TicTacToe.css';

// PUBLIC_INTERFACE
const TicTacToe = () => {
  /**
   * Main container component for TicTacToe game
   * Manages game state, player turns, and win/draw detection
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  // Calculate winner from current board state
  const calculateWinner = (squares) => {
    // All possible winning combinations (rows, columns, diagonals)
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6]  // diagonal top-right to bottom-left
    ];

    // Check if any winning combination is satisfied
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    return null;
  };

  // Check if game is a draw (all squares filled with no winner)
  const isDraw = (squares) => {
    return squares.every(square => square !== null) && !calculateWinner(squares);
  };

  // Handle clicking on a square
  const handleClick = (i) => {
    // If square already filled or game won, ignore click
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Create a copy of squares array
    const newSquares = squares.slice();
    
    // Mark the clicked square with current player's symbol
    newSquares[i] = xIsNext ? 'X' : 'O';
    
    // Update state
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Determine game status message
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw(squares)) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe</h1>
      
      <div className="game-status">{status}</div>
      
      <div className="game-board">
        <Board
          squares={squares}
          onClick={handleClick}
        />
      </div>
      
      <button 
        className="reset-button" 
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
