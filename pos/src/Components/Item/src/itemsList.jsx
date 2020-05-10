import React, { Component } from "react";
import { Table } from "reactstrap";

class ItemsList extends Component {
  render() {
    const { listItems } = this.props;
    console.log(listItems);

    let list = listItems.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <a target="_blank" href={item.cfa_url}>
              {item.name}
            </a>
          </td>
          <td>{item.name}</td>
          <td></td>
          <td>{item.price}</td>
          <td></td>
        </tr>
      );
    });

    return (
      <Table striped responsive hover>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
    );
  }
}

export default ItemsList;
