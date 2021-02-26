json.key_format! camelize: :lower

json.server do 
    json.extract! @server, :id, :name, :link, :owner_id, :direct_message


end

json.user_servers do
    @server.user_servers.each do |user_server|
        json.set! user_server.id do 
            json.extract! user_server, :id, :user_id, :server_id
        end
    end

end

json.users do
    @server.users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :email, :username
        end
    end
end

json.channels do
    @server.channels.each do |channel|
        json.set! channel.id do
            json.extract! channel, :id, :name, :server_id, :creator_id  
        end
    end
end

json.messages do 
    @server.channels.each do |channel|
        channel.messages.each do |message|
            json.set! message.id do 

                json.extract! message, :id, :body, :user_id, :channel_id, :created_at, :updated_at
            end
        end
    end
end