module Api 
    module V1
        class TablesController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                tables = Table.all

                render json: TableSerializer.new(tables, options).serialized_json
            end

            def show
                table = Table.find_by(tableNumber: params[:tableNumber])

                render json: TableSerializer.new(table, options).serialized_json
            end

            def create
                table = Table.new(table_params)
                if table.save
                    render json: TableSerializer.new(table).serialized_json
                else
                    render json: {error: table.errors.messages }, status: 422
                end
            end

            def update
                table = Table.find_by(tableNumber: params[:tableNumber])
                if table.update(table_params)
                    render json: TableSerializer.new(table, options).serialized_json
                else
                    render json: {error: table.errors.messages }, status: 422
                end
            end

            def destroy
                table = Table.find_by(tableNumber: params[:tableNumber])
                if table.destroy
                    head :no_content
                else
                    render json: {error: table.errors.messages }, status: 422
                end
            end

            private

            def table_params
                params.require(:table).permit(:tableNumber)
            end

            def options
                @options ||= { include: %i[items] }
            end




        end
    end
end