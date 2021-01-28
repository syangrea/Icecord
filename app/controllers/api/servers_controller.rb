class Api::ServersController < ApplicationController

    def show
        @server = Server.find(params[:id])
        render :show
    end

    def create
        @server = Server.new(server_params)
        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @server = Server.find(params[:id])
        # debugger
        if @server.update(server_params)
            render :show
        else
            # debugger
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger
        @server = Server.find_by(id: params[:id])
        # debugger
        if @server
            @server.destroy
            render json: {}
        else
            render json: ["Server not found"], status: 404
        end
    end

    private
    def server_params
        params.require(:server).transform_keys(&:underscore).permit(:id, :name, :owner_id, :direct_message)
    end


end
