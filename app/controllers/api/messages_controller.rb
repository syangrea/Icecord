class Api::MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end


    end

    private

    def message_params
        params.require(:message).transform_keys(&:underscore).permit(:body, :channel_id, :user_id)
    end

end
