module Api 
    module V1
        class ItemsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                items = Item.all

                render json: ItemSerializer.new(items).serialized_json
            end

            def show
                item = Item.find_by(params[:name])

                render json: ItemSerializer.new(item).serialized_json
            end

            def create
                item = Item.new(item_params)

                if item.save
                    
                    render json: ItemSerializer.new(item).serialized_json
                else
                    render json: {error: item.errors.messages }, status: 422
                end
            end

            def update
                item = Item.find(params[:id])
                p item 
                p item_params, "<--------"
                if item.update(item_params)
                    render json: ItemSerializer.new(item).serialized_json
                else
                    render json: {error: item.errors.messages }, status: 422
                end
            end

            def destroy
                item = Item.find(params[:id])
                if item.destroy
                    head :no_content
                else
                    render json: {error: item.errors.messages }, status: 422
                end
            end

            private 

            def item_params
                params.require(:item).permit(:name, :itemType, :allergens, :price, :table_id)
            end

        end
    end
end