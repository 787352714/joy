import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import LikeButton from "./components/likeButton";
import MouseEvent from "./components/mouseEvent";
import useMouseMove from "./hooks/useMouseMove"
import useLoder from "./hooks/useLoder"

interface IshowResult {
  message:string,
  status:string
}

function App() {
  const position = useMouseMove();
  const [result,loading] = useLoder('https://dog.ceo/api/breeds/image/random');
  const resultMassage = result as IshowResult;
  return (
    <div className="App">
      <header className="App-header">
        <Hello message="hhhhhhhh" />
        <p>X:{position.x},Y:{position.y}</p>
        <LikeButton/>
        <MouseEvent/>a
        {loading?<p>🐶 loading中</p>:<img src={resultMassage&&resultMassage.message} />}
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
