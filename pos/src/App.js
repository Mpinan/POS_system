import React, { useState } from "react";
import Table from "./Components/Table/table";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>
        <Table number="1" />
        <Table number="2" />
        <Table number="3" />
        <Table number="4" />
        <Table number="5" />
        <Table number="6" />
        <Table number="7" />
        <Table number="8" />
        <Table number="9" />
        <Table number="10" />
      </div>
      <h1>Hello World</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
