class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find(params[:id])
        render :show
    end

end
