const Table = require("../src/table");

describe("Table", () => {
  let table;
  let itemDrink;
  let itemFood;
  beforeEach(() => {
    table = new Table();
    itemFood = {
      name: "Sirloin Steak 8oz",
      price: 20,
    };
    itemDrink = {
      item: "Coke",
      price: 2,
    };
  });

  test("has items", () => {
    expect(table.items).toEqual([]);
  });

  test("is able to add items to the list of items", () => {
    table.addItem(itemFood);
    table.addItem(itemDrink);

    expect(table.items.length).toEqual(2);
  });

  test("has a total cost of items", () => {
    table.addItem(itemFood);
    table.addItem(itemDrink);
    expect(table.totalCost).toEqual(22);
  });
});
