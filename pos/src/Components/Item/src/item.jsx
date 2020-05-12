import React, { Component } from "react";
import ItemModal from "./itemModal";
import { Button } from "reactstrap";

class Item extends Component {
  state = {
    modal: false,
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

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleBookings = () => {
    this.setState({ amount: !this.state.isBusy });
  };

  render() {
    const { listItems } = this.state;
    return (
      <div style={{ margin: "10px", padding: "15px" }}>
        {listItems.map((item) => (
          <div>
            <Button
              className="btn-primary btn-lg"
              color={this.state.isBusy ? "danger" : "primary"}
              id="add-Item"
              onClick={this.handleModal}
            >
              {item.name}
            </Button>
            <ItemModal
              id="itemModal"
              modal={this.state.modal}
              handleModal={this.handleModal}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Item;
