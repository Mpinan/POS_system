const Table = require("../src/table");

describe("Table", () => {
  let table;
  beforeEach(() => {
    table = new Table();
  });

  test("has items", () => {
    expect(table.items).toEqual([]);
  });

  test("is able to add items to the list of items", () => {
    let item = {
      Coke: 2,
      "White wine": 4,
      bolognese: 10,
      "Sirloing steak": 18,
    };
    table.addItem(item);
    expect(table.items.length).toEqual(1);
  });
});
