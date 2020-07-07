class SignupController < ApplicationController

    def create
        user = User.create!(
            email: params["user"]["email"],
            password: params["user"]["password"],
            password_confirmation: params["user"]["password_confirmation"],
            pin: params["user"]["pin"]
        )
        
        if user
            session[:user_id] = user.user_id
            render json: {
                status: :created,
                user: user
            }
        else
            render json: {
                status: 500
            }
        end

    end
end