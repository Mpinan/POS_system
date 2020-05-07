import React, { Component } from "react";
import { Table } from "reactstrap";

class ItemsList extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Item</th>
            <th>Table</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            {/* <button>+</button>
            <button>-</button> */}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            {/* <button>+</button>
            <button>-</button> */}
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            {/* <button>+</button>
            <button>-</button> */}
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ItemsList;
