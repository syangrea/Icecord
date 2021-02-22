json.key_format! camelize: :lower

json.channel do
    json.extract! @channel, :id, :name, :server_id, :creator_id  
end


json.messages do

    @channel.messages.each do |message|
    
        json.set! message.id do 
    
            json.extract! message, :body, :user_id, :channel_id
    
        end
    
    end
end
