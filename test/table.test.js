const Table = require("../src/table");

describe("Table", () => {
  let table;
  beforeEach(() => {
    table = new Table();
  });

  test("has items", () => {
    expect(table.items).toEqual([]);
  });
});
