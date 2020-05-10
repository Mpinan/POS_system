import React, { Component } from "react";

import Table from "./Components/Table/table";

import Item from "./Components/Item/src/item";

import "./App.css";

class App extends Component {
  state = {
    listOfTables: [
      {
        id: 0,
        number: 1,
        items: [
          {
            id: 0,
            name: "Sirloin",
            price: "£20",
          },
          {
            id: 0,
            name: "Sirloin",
            price: "£20",
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
    listItems: [
      {
        id: 0,
        name: "Sirloin",
        price: "£20",
      },
      {
        id: 1,
        name: "Bolognese",
        price: "£20",
      },
      {
        id: 2,
        name: "Coke",
        price: "£20",
      },
      {
        id: 3,
        name: "Fanta",
        price: "£20",
      },
    ],
  };

  render() {
    const { listItems, listOfTables, selectedTable } = this.state;
    return (
      <div className="App">
        <div style={{ float: " left" }}>
          {listOfTables.map((table) => (
            <Table key={table.id} number={table.number} items={table.items} />
          ))}
        </div>

        <div style={{ float: "right" }}>
          {listItems.map((item) => (
            <Item key={item.id} name={item.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
