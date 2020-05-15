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

  render() {
    let selectTable = this.props.onClickSelectTable;

    return (
      <div>
        <div style={{ margin: "10px", padding: "15px" }}>
          <button
            className={
              this.state.isBusy ? "btn-lg btn-danger" : "btn-lg btn-primary"
            }
            key={this.props.id}
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
