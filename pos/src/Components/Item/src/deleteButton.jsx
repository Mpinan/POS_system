import React, { Component } from "react";
import { Button } from "reactstrap";

class Delete extends Component {
  handleDelete = () => {
    console.log(this.props.amount);
    this.props.amount = this.props.amount - 1;
  };

  render() {
    return <Button onClick={this.handleDelete}></Button>;
  }
}

export default Delete;
