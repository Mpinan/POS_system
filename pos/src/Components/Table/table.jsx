import React, { Component } from "react";
import ItemsList from "../Item/src/itemsList";

class Table extends Component {
  state = {
    selectedTable: "",
    isBusy: false,
    showTable: false,
    selectedTableItems: [],
  };

  componentDidMount() {
    this.handleBookings();
  }

  handleBookings = () => {
    if (this.props.items.length > 0) {
      this.setState({ isBusy: true });
    } else {
      this.setState({ isBusy: false });
    }
  };

  onClickChangeTableList = () => {
    let selectedTableItems = [];
    selectedTableItems.push(this.props.items);
    this.setState({ selectedTable: this.props.number });
    this.setState({ selectedTableItems });
    this.setState({ showTable: !this.state.showTable });
  };

  render() {
    return (
      <div>
        <div style={{ margin: "10px", padding: "15px" }}>
          {/* {this.handleBookings} */}
          <button
            className={
              this.state.isBusy ? "btn-lg btn-danger" : "btn-lg btn-primary"
            }
            id="book-table"
            onDoubleClick={this.onClickChangeTableList}
          >
            {this.props.number}
          </button>
        </div>
        {this.state.showTable ? (
          <div
            style={{
              borderStyle: "solid",
              borderColor: "coral",
              position: "relative",
            }}
          >
            <ItemsList
              listItems={this.state.selectedTableItems}
              tableNumber={this.state.selectedTable}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Table;
