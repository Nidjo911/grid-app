import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import React, { useRef, useEffect } from 'react';
import Canvas from 'react-canvas';

/* import React, { useRef, useEffect } from 'react'; */
/* import Canvas from 'react-canvas'; */



function App() {

  function MyCanvas() {
    const canvasRef = useRef(null);

    return (
      <div>

        <Canvas ref={canvasRef} />
      </div>
    );
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Perform drawing operations here
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);

    /* ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100); */
  }, []);


  return (

    <Fragment>
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
    </Fragment>
  );
}

export default App;
