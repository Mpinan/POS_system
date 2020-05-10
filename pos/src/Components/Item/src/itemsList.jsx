import React, { Component } from "react";
import { Table } from "reactstrap";

class ItemsList extends Component {
  render() {
    const { listItems } = this.props;

    let list = listItems.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <a target="_blank" href={item.cfa_url}>
              {item.name}
            </a>
          </td>
          <td>2</td>
          <td>{item.price}</td>
          <td></td>
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </div>
    );
  }
}

export default ItemsList;
