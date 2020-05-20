import React, { Component } from "react";

class DinningTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      showTable: false,
    };
  }

  handleBookings = () => {
    if (this.props.items.length >= 1) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let selectTable = this.props.onClickSelectTable;
    const isBusy = this.handleBookings;

    return (
      <div>
        <div style={{ margin: "10px", padding: "15px" }}>
          <button
            className={isBusy() ? "btn-lg btn-danger" : "btn-lg btn-primary"}
            key={this.props.id}
            id="book-table"
            onClick={selectTable}
          >
            {this.props.number}
          </button>
        </div>
      </div>
    );
  }
}

export default DinningTable;
