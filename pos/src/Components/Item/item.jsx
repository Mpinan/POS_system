import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class Item extends Component {
  state = {
    modal: false,
    amount: 0,
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleBookings = () => {
    this.setState({ amount: !this.state.isBusy });
  };

  increment = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  decrement = () => {
    this.setState({ amount: this.state.amount - 1 });
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
        <Modal isOpen={this.state.modal} toggle={this.handleModal}>
          <ModalHeader toggle={this.handleModal}>{this.props.name}</ModalHeader>
          <ModalBody>
            How Many?
            <Container>
              <Button onClick={this.decrement}>-</Button>
              <h2>{this.state.amount}</h2>
              <Button onClick={this.increment}>+</Button>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleModal}>
              Add
            </Button>
            <Button color="secondary" onClick={this.handleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Item;
