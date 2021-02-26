json.key_format! camelize: :lower
user.servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :name, :link, :owner_id, :direct_message
    end
end
