import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Hello World</h1>
        <div id="counter-value">{counter}</div>
        <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
