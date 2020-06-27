require 'rails_helper'


        RSpec.describe Api::V1::TablesController, type: :controller do
            describe 'show all tables ' do
                it 'responds with 200' do
                    get :index
                    expect(response).to have_http_status(200)
                end
            end
            context 'table' do
                it 'can Create a table' do
                    post :create, params: { table: {tableNumber: 2} } 
                    table = Table.find_by(tableNumber: 2)
                    expect(table.tableNumber).to eq(2)
                  end
            end

end


