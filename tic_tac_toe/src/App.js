import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Interactive Game</div>
            
            <h1 className="title">TicTacToe Classic</h1>
            
            <div className="description">
              A simple two-player game where X and O take turns marking spaces in a 3x3 grid.
              The first player to align three marks horizontally, vertically, or diagonally wins.
            </div>
            
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;