import React, { Component } from "react";
import { Table } from "reactstrap";

class ItemsList extends Component {
  state = {
    show: false,
  };

  showTableNumber() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { itemsInTable } = this.props;
    let total = [];
    let list = itemsInTable.map((item) => {
      let totalPricePerItem;
      totalPricePerItem = item.amount * item.price;
      total.push(totalPricePerItem);

      return (
        <tbody key={item.id}>
          <tr>
            <td>
              <a target="_blank" href={item.cfa_url}>
                {item.name}
              </a>
            </td>
            <td>{item.amount}</td>
            <td>£{item.price}</td>
            <td>£{totalPricePerItem}</td>
            <td></td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        {this.state.show ? null : (
          <Table>
            <thead>
              <tr>
                <th style={{ color: "white" }}>
                  Table number: {this.props.tableNumber}
                </th>
              </tr>
            </thead>
          </Table>
        )}
        <Table striped responsive hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Price per Item</th>
              <th>Total Price of Item</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {list}
          <thead>
            <tr>
              <th>Total Price</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{(total = total.reduce((a, b) => a + b, 0))}</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default ItemsList;
