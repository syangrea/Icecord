class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find(params[:id])
        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel = Channel.find(params[:id])
        if @channel.update(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        # 
        if @channel
            @channel.destroy
            render json: {}
        else
            render json: ["channel not found"], status: 404
        end
    end

    private
    def channel_params
        params.require(:channel).transform_keys(&:underscore).permit(:id,:name, :creator_id, :server_id)
    end


end
