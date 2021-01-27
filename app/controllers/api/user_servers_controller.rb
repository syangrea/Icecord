class Api::UserServersController < ApplicationController

    def create
        @server = Server.find_by(link: params.transform_keys(&:underscore)[:user_server][:link])
        # debugger
        if @server
            # debugger
            user_server = UserServer.new(user_id: current_user.id, server_id: @server.id)
            if user_server.save
                # debugger
                render template: '/api/servers/show'
            else
                # debugger
                render json: user_server.errors.full_messages, status: 422
            end

        else
            render json: ["Not a valid link"], status: 404
        end
    end

    def destroy
        user_server = UserServer.find_by(id: params[:id])
        if user_server
            user_server.destroy
            render json: {}
        else
            render json: ["User isn't part of server"], status: 404
        end
    end

   

end
