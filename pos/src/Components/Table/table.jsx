import React, { Component } from "react";

class DinningTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBusy: false,
      showTable: false,
    };
  }

  handleBookings = () => {
    setTimeout(() => {
      if (this.props.items.length >= 1) {
        this.setState({ isBusy: true });
      } else {
        this.setState({ isBusy: false });
      }
    }, 5);
  };

  componentDidMount() {
    this.handleBookings();
  }

  // onClickChangeTableList = (tableNumber) => {
  //   // this.state.selectedTable;
  //   // let selectedTableItems = [];
  //   // selectedTableItems.push(this.props.items);
  //   this.setState({ selectedTable: tableNumber });
  //   // this.setState({ selectedTableItems });
  //   // this.setState({ showTable: !this.state.showTable });
  // };

  render() {
    let selectTable = this.props.onClickSelectTable;

    return (
      <div>
        <div style={{ margin: "10px", padding: "15px" }}>
          <button
            className={
              this.state.isBusy ? "btn-lg btn-danger" : "btn-lg btn-primary"
            }
            key={this.props.number}
            id="book-table"
            onClick={selectTable}
          >
            {this.props.number}
          </button>
        </div>
      </div>
    );
  }
}

export default DinningTable;
