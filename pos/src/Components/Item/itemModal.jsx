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
    amount: 0,
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  decrement = () => {
    this.setState({ amount: this.state.amount - 1 });
  };

  increment = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.handleModal}>
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
          <Button color="primary" onClick={this.props.handleModal}>
            Add
          </Button>
          <Button color="secondary" onClick={this.props.handleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ItemModal;
