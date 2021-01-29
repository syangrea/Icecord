json.key_format! camelize: :lower

user.servers.each do |server|

    server.channels.each do |channel|
        json.set! channel.id do
            json.extract! channel, :id, :name, :server_id, :creator_id
        end
    end


end