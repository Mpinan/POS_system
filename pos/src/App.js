import React, { Component } from "react";

import Table from "./Components/Table/table";

import ItemsList from "./Components/Item/src/itemsList";
import Item from "./Components/Item/src/item";

import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  state = {
    listOfTables: [
      { id: 0, number: 1 },
      { id: 1, number: 2 },
      { id: 2, number: 3 },
      { id: 3, number: 4 },
      { id: 4, number: 5 },
      { id: 5, number: 6 },
      { id: 6, number: 7 },
      { id: 7, number: 8 },
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
    addedItems: [],
  };

  render() {
    const { listItems, listOfTables } = this.state;
    return (
      <div className="App">
        {/* <Container style={{ borderStyle: "solid", borderColor: "coral" }}> */}
        <div style={{ float: " left" }}>
          {listOfTables.map((table) => (
            <Table key={table.id} number={table.number} />
          ))}
        </div>
        <div style={{ float: "left" }}>
          <Table number="7" />
          <Table number="8" />
          <Table number="9" />
          <Table number="10" />
        </div>
        {/* </Container> */}
        {/* <Container style={{ borderStyle: "solid", borderColor: "coral" }}> */}
        <div style={{ float: "right" }}>
          {listItems.map(
            (item) => (
              console.log(item.name), (<Item key={item.id} name={item.name} />)
            )
          )}
        </div>
        {/* </Container> */}
        <Container style={{ borderStyle: "solid", borderColor: "coral" }}>
          <ItemsList />
        </Container>
      </div>
    );
  }
}

export default App;
