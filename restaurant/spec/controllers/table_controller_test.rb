require 'rails_helper'


        RSpec.describe Api::V1::TablesController, type: :controller do
            describe 'show all tables ' do
                it 'responds with 200' do
                    get :index
                    expect(response).to have_http_status(200)
                end
            end
            context 'CRUD' do
                it 'can Create a table' do
                    post :create, params: { table: {tableNumber: 2} } 
                    table = Table.find_by(tableNumber: 2)
                    expect(table.tableNumber).to eq(2)
                end

                xit 'can update a table' do
                    post :create, params: { table: {tableNumber: 2} } 
                    table = Table.find_by(tableNumber: 2)
                    p table
                    patch :update, params:{ table: { tableNumber: 8 } }
                    idCheck = Table.find(table.id)
                    expect(table.id).to eq(idCheck)
                    expect(table.tableNumber).to eq(8)
                end

                xit 'can delete a table' do
                    post :create, params: { table: {tableNumber: 2} } 
                    table = Table.find_by(tableNumber: 2)
                    delete :delete, params: { id: table.id }
                    expect(table.tableNumber).no_to_ eq(2)
                end

                
            end

end


