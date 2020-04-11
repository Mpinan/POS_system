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
});
