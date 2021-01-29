class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # debugger
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

 
  def getMessages
    # debugger
    messages = Message.all

    ChatChannel.broadcast_to(@channel, type: 'LOAD_MESSAGES',
      data: ApplicationController.render(
        :json, partial: 'api/messages/messages', locals: {messages: messages}
    ))

  end
  

  def sendMessage(data)
    # debugger
    message = Message.create(body: data['body'], user_id: data['userId'], channel_id: data['channelId'])
    
    ChatChannel.broadcast_to(@channel, type: 'SENT_MESSAGE',
      data: ApplicationController.render(
        :json, partial: 'api/messages/message', locals: {message: message}
    ))
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
