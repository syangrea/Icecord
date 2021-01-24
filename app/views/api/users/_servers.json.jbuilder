
user.servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :name, :link
    end
end
