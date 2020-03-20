import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import LikeButton from "./components/likeButton";
import MouseEvent from "./components/mouseEvent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message="hhhhhhhh" />
        <LikeButton/>
        <MouseEvent/>
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
