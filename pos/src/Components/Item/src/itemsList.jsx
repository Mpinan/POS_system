import React, { Component } from "react";
import { Table } from "reactstrap";
import Item from "./item";

class ItemsList extends Component {
  render() {
    const { listItems } = this.props;
    let totalPricePerItem;
    console.log(listItems);
    let list = listItems[0].map((item) => {
      totalPricePerItem = item.amount * item.price;

      return (
        <tr key={item.id}>
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
      );
    });

    return (
      <div stlye={{ position: "absolute", bottom: "0" }}>
        {this.props.tableNumber}
        <Table striped responsive hover>
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
              <th>{totalPricePerItem + totalPricePerItem}</th>
            </tr>
          </thead>
        </Table>
        <div style={{ float: "right" }}>
          <Item />
        </div>
      </div>
    );
  }
}

export default ItemsList;
