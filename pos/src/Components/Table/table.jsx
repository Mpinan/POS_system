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
      <div style={{ margin: "10px", padding: "15px" }}>
        <Button
          className="btn-lg"
          color={this.state.isBusy ? "danger" : "primary"}
          id="book-table"
          onClick={this.handleBookings}
        >
          {this.props.number}
        </Button>
      </div>
    );
  }
}

export default Table;
