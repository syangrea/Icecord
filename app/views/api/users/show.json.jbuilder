json.user do
    json.partial! 'api/users/user', user: @user
end

json.servers do
    @user.servers.each do |server|
        json.set! server.id do
            json.extract! server, :id, :name, :link
        end
    end
end

json.user_servers do
    @user.user_servers.each do |user_server|
        json.set! user_server.id do 
            json.extract! user_server, :id, :user_id, :server_id
        end
    end

end