import React, { Component } from "react";
import { Button } from "reactstrap";

class Table extends Component {
  state = {
    isBusy: false,
  };

  handleBookings = () => {
    this.setState({ isBusy: !this.state.isBusy });
  };
  render() {
    return (
      <div>
        <h1>Hello Table</h1>
        <Button
          className="btn-lg"
          color={this.state.isBusy ? "danger" : "primary"}
          id="book-table"
          onClick={this.handleBookings}
        >
          Book
        </Button>
      </div>
    );
  }
}

export default Table;
