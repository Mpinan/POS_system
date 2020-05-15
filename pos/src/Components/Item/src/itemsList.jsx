import React, { Component } from "react";
import { Table } from "reactstrap";

class ItemsList extends Component {
  render() {
    const { itemsInTable } = this.props;
    let totalPricePerItem;
    console.log(itemsInTable);
    let list = itemsInTable.map((item) => {
      totalPricePerItem = item.amount * item.price;

      return (
        <tbody>
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
        </tbody>
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
        {/* <div style={{ float: "right" }}>
          <Menu />
        </div> */}
      </div>
    );
  }
}

export default ItemsList;
