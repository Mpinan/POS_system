class Table {
  constructor() {
    this.items = [];
    this.totalCost = 0;
  }

  addItem(item) {
    this.items.push(item);
    this.totalCost += item.price;
  }
}

module.exports = Table;
