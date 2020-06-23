require 'rails_helper'

RSpec.describe Item, type: :model do

  context 'Item' do  
    table = Table.new(id: 0, tableNumber: 2, created_at: nil, updated_at: nil)

    xit 'generate an item' do   
      p table
      p items
      expect(items).to eq(items)
    end

  end
end
