json.key_format! camelize: :lower

json.extract! message, :id, :body, :user_id, :channel_id, :created_at, :updated_at