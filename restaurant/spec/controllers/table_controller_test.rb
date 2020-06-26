require 'rails_helper'


        RSpec.describe Api::V1::TablesController, type: :controller do
            describe 'GET /new ' do
                it 'responds with 200' do
                    get :tables
                    expect(response).to have_http_status(200)
                end
            end

end