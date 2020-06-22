# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

tables = Table.create([
    { tableNumber: 2 },
    { tableNumber: 3 },
    { tableNumber: 4 },
    { tableNumber: 5 },
    { tableNumber: 6 },
    { tableNumber: 7 },
    { tableNumber: 8 }
])

items = Item.create([
    {
    name: "Sirloin",
    itemType: "Main",
    price: 17,
    table: tables.first
  },
  {
    name: "Coke",
    itemType: "Drink",
    price: 3,
    table: tables.first
  }
])