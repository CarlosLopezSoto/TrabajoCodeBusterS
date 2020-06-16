import React from 'react';
// import logo from './logo.svg';
import logo from './giphy.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Busters</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Best Grupo 2020
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
