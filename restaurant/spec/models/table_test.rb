require 'rails_helper'

RSpec.describe Table, type: :model do

  context 'Table' do  
    table = Table.new(id: 0, tableNumber: 2, created_at: nil, updated_at: nil)
    items = Item.new([
      {
      name: "Sirloin",
      itemType: "Main",
      allergens: "None",
      price: 17,
      table: tables.id
    },
    {
      name: "Coke",
      itemType: "Drink",
      allergens: "None",
      price: 3,
      table: tables.id
    }
  ])

    it 'generate a table number' do 
      expect(table.tableNumber).to eq(2)
    end

  end
end