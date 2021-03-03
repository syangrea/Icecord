class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login_user(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        debugger
        if @user
            if user_params[:photo]
                if @user.update(user_params)
                    render :show
                else
                    render json: @user.errors.full_messages, status: 422 
                end
            elsif @user.is_password?(user_params[:password])
                if @user.update(user_params)
                    render :show
                else
                    render json: @user.errors.full_messages, status: 422 
                end
            else
                render json: ["Invalid Password"], status: 404
            end

        end
     
    end


    private
    def user_params
        params.require(:user).permit(:id, :email, :username, :password, :photo)
    end

end
