const Bar = require("../src/bar.js");

describe("Bar", () => {
  beforeEach(() => {
    bar = new Bar("El topo");
  });

  test("has a name", () => {
    expect(bar.name).toBe("El topo");
  });

  test("has clients", () => {
    expect(bar.clients).toEqual([]);
  });

  test("has a list of drinks", () => {
    expect(bar.drinks).toEqual([]);
  });

  test("has a list with the orders", () => {
    expect(bar.orders).toEqual([]);
  });
});
