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
    let itemFood = {
      "Sirloin Steak 8oz": 20,
    };
    let itemDrink = {
      Coke: 2,
    };
    table.addItem(itemFood);
    table.addItem(itemDrink);

    expect(table.items.length).toEqual(2);
  });
});
