class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user 
            login(@user)
            render "/"
        else 
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy 
        @user = current_user
        if @user 
            logout 
            render "/"
        end
    end

end

