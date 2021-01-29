json.set! @message.id do
    json.extract! @message, :id, :body, :user_id, :channel_id
end