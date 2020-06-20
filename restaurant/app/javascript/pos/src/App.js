import React, { Component } from "react";
import DinningTable from "./Components/Table/table";
import Menu from "./Components/Item/src/menu";
import "./App.css";
import { Row, Col } from "reactstrap";
import ItemsList from "./Components/Item/src/itemsList";
import ItemModal from "./Components/Item/src/itemModal";
import { getTables } from "./Components/services/fakeTables";
import { getItems } from "./Components/services/fakeItems";

class App extends Component {
  state = {
    isBusy: false,
    items: [],
    listOfTables: [],
    listItems: [],
    totalPrice: 0,
    amount: 5,
  };

  componentDidMount() {
    let tables = getTables();
    let items = getItems();
    this.setState({ listOfTables: tables, listItems: items });
  }

  onClickChangeTableList = (tableNumber) => {
    const { listOfTables } = this.state;

    this.setState({ selectedTable: listOfTables[tableNumber].number });
    this.setState({ selectedTableID: listOfTables[tableNumber].id });
    let items = [...listOfTables[tableNumber].items];
    this.setState({ items });
  };

  render() {
    const {
      listOfTables,
      listItems,
      selectedTable,
      totalPrice,
      items,
      selectedTableID,
    } = this.state;

    return (
      <div className="App">
        <div id="tables">
          {listOfTables.map((table, i) => (
            <div className="margin" key={i}>
              <DinningTable
                isBusy={this.state.isBusy}
                key={i}
                onClickSelectTable={() => this.onClickChangeTableList(table.id)}
                number={table.number}
                items={table.items}
                totalPrice={table.totalPrice}
              />
            </div>
          ))}
        </div>

        <div className="container" id="container" style={{ float: "right" }}>
          <Row id="items">
            {listItems.map((item, i) => (
              <div className="margin" key={i}>
                <Col xs="4" sm="4" key={i}>
                  <ItemModal item={item} />
                  <Menu
                    key={i}
                    tableID={selectedTableID}
                    itemID={item.id}
                    name={item.name}
                    price={item.price}
                    tableNumber={selectedTable}
                    listOfTables={listOfTables}
                  />
                </Col>
              </div>
            ))}
          </Row>
        </div>

        <div className="container" id="container" style={{ float: "left" }}>
          <div className="container-bg">
            <ItemsList
              amount={this.state.amount}
              itemsInTable={items}
              tableNumber={selectedTable}
              totalPrice={totalPrice}
            ></ItemsList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
