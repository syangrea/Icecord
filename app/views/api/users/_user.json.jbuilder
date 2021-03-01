json.key_format! camelize: :lower
json.extract! user, :id, :email, :username
if(user.photo.attached?)
    json.photo_url url_for(user.photo)
end
