const Client = require("../src/client.js");

describe("Client", () => {
  beforeEach(() => {
    client = new Client("El topo");
  });

  test("has a name", () => {
    expect(client.name).toBe("El topo");
  });

  test("has a wallet with money", () => {
    expect(client.wallet).toBe(10);
  });

  test("can buy a drink", () => {
    client.orderDrink("Vozka");
    expect(client.totalDrinks[0]).toBe("Vozka");
  });
});
