require 'rails_helper'


        RSpec.describe Api::V1::TablesController, type: :controller do
            describe 'show all tables ' do
                it 'responds with 200' do
                    get :index
                    expect(response).to have_http_status(200)
                end
            end

end