import React, { Component } from "react";

import Table from "./Components/Table/table";

import "./App.css";

class App extends Component {
  state = {
    listOfTables: [
      {
        id: 0,
        number: 1,
        items: [
          { id: 0, name: "Sirloin", price: 20, amount: 3 },
          {
            id: 1,
            name: "Coke",
            amount: 3,
            price: 20,
          },
        ],
      },
      { id: 1, number: 2, items: [] },
      { id: 2, number: 3, items: [] },
      { id: 3, number: 4, items: [] },
      { id: 4, number: 5, items: [] },
      { id: 5, number: 6, items: [] },
      { id: 6, number: 7, items: [] },
      { id: 7, number: 8, items: [] },
    ],
  };

  render() {
    const { listOfTables } = this.state;
    return (
      <div className="App">
        <div>
          {listOfTables.map((table) => (
            <div className="text-center">
              <Table key={table.id} number={table.number} items={table.items} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
