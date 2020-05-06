import React, { useState } from "react";
import Table from "./Components/Table/table";
import Item from "./Components/Item/item";
import "./App.css";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <div style={{ float: "left" }}>
          <Table number="1" />
          <Table number="2" />
          <Table number="3" />
          <Table number="4" />
          <Table number="5" />
          <Table number="6" />
        </div>
        <div style={{ float: "left" }}>
          <Table number="7" />
          <Table number="8" />
          <Table number="9" />
          <Table number="10" />
          <Table number="11" />
          <Table number="12" />
        </div>
      </Container>
      <Container>
        <div style={{ float: "right" }}>
          <Item name="Sirloin Steak" />
          <Item name="Sirloin Steak" />
          <Item name="Sirloin Steak" />
          <Item name="Sirloin Steak" />
          <Item name="Sirloin Steak" />
          <Item name="Sirloin Steak" />
        </div>
        <div style={{ float: "right" }}>
          <Item name="Coke" />
          <Item name="Coke" />
          <Item name="Coke" />
          <Item name="Coke" />
          <Item name="Coke" />
          <Item name="Coke" />
        </div>
      </Container>
    </div>
  );
}

export default App;
