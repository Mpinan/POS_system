import React, { useState } from "react";
import Table from "./Components/Table/table";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Table></Table>
      <h1>Hello World</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
