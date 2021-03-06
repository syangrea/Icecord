class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login_user(@user)
            render template: 'api/users/show'
        else
            render json: ['Invalid credentials'], status: 404
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ['Not logged in'], status: 404
        end
    end

end
