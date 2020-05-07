import React, { Component } from "react";

import Table from "./Components/Table/table";

import ItemsList from "./Components/Item/src/itemsList";
import Item from "./Components/Item/src/item";

import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  state = {
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
    const { listItems } = this.state;
    return (
      <div className="App">
        <Container>
          <div style={{ float: "left" }}>
            <Table number="1" />
            <Table number="2" />
            <Table number="3" />
            <Table number="4" />
          </div>
          <div style={{ float: "left" }}>
            <Table number="7" />
            <Table number="8" />
            <Table number="9" />
            <Table number="10" />
          </div>
        </Container>
        <Container>
          <div style={{ float: "right" }}>
            {listItems.map(
              (item) => (
                console.log(item.name),
                (<Item key={item.id} name={item.name} />)
              )
            )}
          </div>
        </Container>
        <Container>
          <ItemsList />
        </Container>
      </div>
    );
  }
}

export default App;
