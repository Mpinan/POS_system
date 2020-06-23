module Api 
    module V1
        class ItemsController < ApplicationController
            def create
                item = Item.new(item_params)
                if item.save
                    render json: ItemSerializer.new(item).serialized_json
                else
                    render json: {error: item.errors.messages }, status: 422
                end
            end

            def update
                item = Item.find_by(itemNumber: params[:itemNumber])
                if item.update(item_params)
                    render json: ItemSerializer.new(item, options).serialized_json
                else
                    render json: {error: item.errors.messages }, status: 422
                end
            end

            def destroy
                item = Item.find_by(itemNumber: params[:itemNumber])
                if item.destroy
                    head :no_content
                else
                    render json: {error: item.errors.messages }, status: 422
                end
            end

            private 

            def review_params
                params.require(:item).permit(:name, :itemType, :allergens, :price, :table_id)
            end

        end
    end
end