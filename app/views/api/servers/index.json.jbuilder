json.key_format! camelize: :lower

json.servers do 
    @servers.each do |server|
        json.set! server.id do
            json.extract! server, :id, :name, :link, :owner_id, :direct_message
            if(server.photo.attached?)
                json.photo_url url_for(server.photo)
            end 
        end
    end
end