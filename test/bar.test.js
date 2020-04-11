const Bar = require("../src/bar.js");

describe("Bar", () => {
  beforeEach(() => {
    bar = new Bar("El topo");
  });

  test("has a name", () => {
    expect(bar.name).toBe("El topo");
  });
});
