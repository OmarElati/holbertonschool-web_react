import React from 'react';
import './App.css';
import holberton_logo from './assets/holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
      </header>

      <div className="App-body">

        <p>Login to access the full dashboard</p>

        <div className='form'>

          <label htmlFor='email'>
            <span>Email:</span>
            <input type='email' name="email" id="email" />
          </label>

          <label htmlFor='password'>
            <span>Password:</span>
            <input type='password' name="password" id="password" />
          </label>

          <button onClick={() => {}}>OK</button>

        </div>

      </div>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>

    </div>
  );
}

export default App;
