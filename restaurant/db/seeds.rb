# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

tables = Table.create([
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 }
])

items = Item.create([
    {
    name: "Sirloin",
    type: "Main",
    price: 17,
  },
  {
    name: "Bolognese",
    type: "Main",
    price: 15,
  },
  {
    name: "Coke",
    type: "Drink",
    price: 3,
  },
  {
    name: "Fanta",
    type: "Drink",
    price: 3,
  },
  {
    name: "Brownie",
    type: "Dessert",
    price: 5,
  },
  {
    name: "Tiramisu",
    type: "Dessert",
    price: 5,
  },
])