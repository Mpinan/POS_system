import React, { Component } from "react";
import ItemModal from "./itemModal";
import { Button } from "reactstrap";

class Item extends Component {
  state = {
    modal: false,
    // amount: 0,
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleBookings = () => {
    this.setState({ amount: !this.state.isBusy });
  };

  render() {
    return (
      <div style={{ margin: "10px", padding: "15px" }}>
        <Button
          className="btn-lg"
          color={this.state.isBusy ? "danger" : "primary"}
          id="book-Item"
          onClick={this.handleModal}
        >
          {this.props.name}
        </Button>

        <ItemModal modal={this.state.modal} handleModal={this.handleModal} />
      </div>
    );
  }
}

export default Item;
