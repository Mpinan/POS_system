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
    this.setState({ amount: 0 });
  };

  decrement = () => {
    this.setState({ amount: this.state.amount - 1 });
  };

  increment = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.handleModal}>
          <ModalHeader toggle={this.handleModal}>{this.props.name}</ModalHeader>
          <ModalBody>
            How Many?
            <Container>
              <Button
                id="decrement=btn"
                onClick={this.decrement}
                disabled={this.state.amount === 0 ? true : false}
              >
                -
              </Button>
              <h2>
                {this.state.amount}{" "}
                <Button id="reset=btn" onClick={this.reset}>
                  Reset
                </Button>
              </h2>
              <Button id="increment=btn" onClick={this.increment}>
                +
              </Button>
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
      </div>
    );
  }
}

export default ItemModal;
