import React from 'react';
import './App.css';
import logo from './Holberton_Logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
      </header>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr />
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
