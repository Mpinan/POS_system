import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ItemModal extends Component {
  state = {
    amount: 0,
    currentItem: {},
    listOfTable: this.props.listOfTables,
  };

  reset = () => {
    this.setState({ amount: 5 });
  };

  decrement = () => {
    this.setState({ amount: this.state.amount - 1 });
  };

  increment = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  addItem = () => {
    const currentItem = {};
    currentItem.id = this.props.itemID;
    currentItem.amount = this.state.amount;
    currentItem.name = this.props.itemName;
    currentItem.price = this.props.itemPrice;
    this.setState({ currentItem });
    this.state.listOfTable[this.props.tableID].items.push(currentItem);
    this.props.handleModal();
  };

  render() {
    const { modal, handleModal, tableNumber, itemName } = this.props;
    return (
      <div>
        <div>
          <Modal isOpen={modal} toggle={handleModal}>
            <ModalHeader toggle={handleModal}>
              {itemName} For Table number {tableNumber}
            </ModalHeader>

            <ModalBody>
              How Many?
              <div className="text-center">
                <Button
                  style={{ margin: "5px" }}
                  id="decrement=btn"
                  onClick={this.decrement}
                  disabled={this.state.amount === 0 ? true : false}
                >
                  -
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  id="increment=btn"
                  onClick={this.increment}
                >
                  +
                </Button>

                <h2>{this.state.amount} </h2>
                <Button id="reset=btn" onClick={this.reset}>
                  Reset
                </Button>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addItem}>
                Add
              </Button>
              <Button color="secondary" onClick={handleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ItemModal;
