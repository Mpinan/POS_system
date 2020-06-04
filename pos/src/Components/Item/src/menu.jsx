import React, { Component } from "react";
import ItemModal from "./itemModal";
import { Button } from "reactstrap";

class Menu extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleBookings = () => {
    this.setState({ amount: !this.state.isBusy });
  };

  render() {
    const {
      name,
      tableNumber,
      listOfTables,
      itemID,
      price,
      tableID,
    } = this.props;

    return (
      <div style={{ margin: "10px", padding: "15px" }}>
        <div>
          <Button
            style={{
              width: 150,
              height: "auto",
            }}
            className="btn-primary btn-lg"
            color={this.state.isBusy ? "danger" : "primary"}
            id="add-Item"
            onClick={this.handleModal}
          >
            {name}
          </Button>
          <ItemModal
            itemName={name}
            itemID={itemID}
            itemPrice={price}
            tableNumber={tableNumber}
            tableID={tableID}
            listOfTables={listOfTables}
            id="itemModal"
            modal={this.state.modal}
            handleModal={this.handleModal}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
