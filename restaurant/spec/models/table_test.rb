require 'rails_helper'

RSpec.describe Table, type: :model do

  context 'Table' do  
    table = Table.new(tableNumber: 2)

    it 'generate a table number' do 
      table.total_price  
      expect(table.tableNumber).to eq(2)
    end
  end
end