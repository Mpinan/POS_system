import React, { Component } from "react";

import DinningTable from "./Components/Table/table";
import Menu from "./Components/Item/src/menu";
import "./App.css";
import { Container } from "reactstrap";
import ItemsList from "./Components/Item/src/itemsList";

class App extends Component {
  state = {
    selectedTable: "",
    showItemsInTable: false,
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

  onClickChangeTableList = (tableID) => {
    console.log(tableID);
    // this.state.selectedTable;
    // let selectedTableItems = [];
    // selectedTableItems.push(this.props.items);
    // this.setState({ selectedTable: tableNumber });
    // this.setState({ selectedTableItems });
    // this.setState({ showTable: !this.state.showTable });
  };

  render() {
    const { listOfTables, listItems } = this.state;

    return (
      <div className="App">
        <Container>
          {listOfTables.map((table) => (
            <div style={{ margin: "2px", float: "left" }}>
              <DinningTable
                onClickSelectTable={() =>
                  this.onClickChangeTableList(table.number)
                }
                key={table.id}
                number={table.number}
                items={table.items}
              />
            </div>
          ))}
        </Container>
        <Container>
          {listItems.map((item) => (
            <div
              className="text-center"
              style={{ margin: "2px", float: "right" }}
            >
              <Menu key={item.id} name={item.name} price={item.price} />
            </div>
          ))}
        </Container>
        <Container>
          <ItemsList
            itemsInTable={listOfTables}
            tableNumber={this.state.selectedTable}
          ></ItemsList>
        </Container>
      </div>
    );
  }
}

export default App;
