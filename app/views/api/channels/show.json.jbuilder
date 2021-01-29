json.key_format! camelize: :lower

@channel.messages.each do |message|

    json.set! message.id do 

        json.extract! message, :body, :user_id, :channel_id

    end

end
