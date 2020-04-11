class Client {
  constructor(name) {
    this.name = name;
    this.wallet = 10;
    this.totalDrinks = [];
  }

  orderDrink(drink) {
    this.totalDrinks.push(drink);
  }
}

module.exports = Client;
