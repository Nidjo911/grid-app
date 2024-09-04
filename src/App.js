import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

/* import React, { useRef, useEffect } from 'react'; */
/* import Canvas from 'react-canvas'; */

function App() {
  return (

    <Fragment>

function MyCanvas() {
  const canvasRef = useRef(null);

  return (
    <div>
      <Canvas ref={canvasRef} />
    </div>
  );
}
    </Fragment>
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
