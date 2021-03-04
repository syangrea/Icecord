class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

 
  def getMessages
    
    messages = Message.all

    ChatChannel.broadcast_to(@channel, type: 'LOAD_MESSAGES',
      data: ApplicationController.render(
        :json, partial: 'api/messages/messages', locals: {messages: messages}
    ))

  end
  
  def editMessage(data)
    message = Message.find(data['id'])
    if message.update(body: data['body'])
      ChatChannel.broadcast_to(@channel, type: 'EDIT_MESSAGE',
        data: ApplicationController.render(
          :json, partial: 'api/messages/message', locals: {message: message}
      ))
    end
  end

  def deleteMessage(data)
    message = Message.find(data['messageId'])
    message.destroy
    ChatChannel.broadcast_to(@channel, type: 'DELETE_MESSAGE', data: message.id)
  end

  def sendMessage(data)
    
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
