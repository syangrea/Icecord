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
        # 
        @server = Server.find(params[:id])
        # 
        
        if server_params[:photo] && server_params[:photo] === 'delete'
            @server.photo.purge
            render :show
        elsif @server.update(server_params)
            render :show
        else
            # 
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        # 
        @server = Server.find_by(id: params[:id])
        # 
        if @server
            @server.destroy
            render json: {}
        else
            render json: ["Server not found"], status: 404
        end
    end

    private
    def server_params
        params.require(:server).transform_keys(&:underscore).permit(:id, :name, :owner_id, :direct_message, :photo)
    end


end
