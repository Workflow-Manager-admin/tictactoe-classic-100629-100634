import React from 'react';

// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => {
  /**
   * Renders a single square in the TicTacToe grid
   */
  return (
    <button 
      className="square" 
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </button>
  );
};

export default Square;
