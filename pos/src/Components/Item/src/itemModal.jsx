import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class ItemModal extends Component {
  state = {
    currentItem: {
      id: this.props.itemID,
      name: this.props.itemName,
      amount: 0,
      price: this.props.itemPrice,
    },
    listOfTable: this.props.listOfTables,
  };

  reset = () => {
    this.setState({ amount: 0 });
  };

  decrement = () => {
    this.setState({ amount: this.state.currentItem.amount - 1 });
  };

  increment = () => {
    this.setState({ amount: this.state.currentItem.amount + 1 });
  };

  addItem = () => {
    this.state.listOfTable[this.props.tableID].items.push(
      this.state.currentItem
    );
    this.props.handleModal();
    console.log(this.state.listOfTable[this.props.tableID].items);
  };

  render() {
    const { modal, handleModal, tableNumber, itemName } = this.props;
    return (
      <div>
        <Container>
          <Modal isOpen={modal} toggle={handleModal}>
            <ModalHeader toggle={handleModal}>
              {itemName} For Table number {tableNumber}
            </ModalHeader>

            <ModalBody>
              How Many?
              <Container className="text-center">
                <Button
                  style={{ margin: "5px" }}
                  id="decrement=btn"
                  onClick={this.decrement}
                  disabled={this.state.currentItem.amount === 0 ? true : false}
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

                <h2>{this.state.currentItem.amount} </h2>
                <Button id="reset=btn" onClick={this.reset}>
                  Reset
                </Button>
              </Container>
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
        </Container>
      </div>
    );
  }
}

export default ItemModal;
