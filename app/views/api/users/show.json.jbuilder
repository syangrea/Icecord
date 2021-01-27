json.key_format! camelize: :lower

json.user do
    json.partial! 'api/users/user', user: @user
end

json.servers do
    json.partial! 'api/users/servers', user: @user
    
end

json.user_servers do
    json.partial! 'api/users/user_servers', user: @user

end