import React, { Component } from "react";

class Table extends Component {
  state = {
    isBusy: false,
  };

  handleBookings = () => {
    if (this.props.items.length > 0) {
      this.setState({ isBusy: !this.state.isBusy });
    }
  };

  render() {
    return (
      <div style={{ margin: "10px", padding: "15px" }}>
        <button
          className={
            this.state.isBusy ? "btn-lg btn-danger" : "btn-lg btn-primary"
          }
          id="book-table"
          onClick={this.handleBookings}
        >
          {this.props.number}
        </button>
      </div>
    );
  }
}

export default Table;
