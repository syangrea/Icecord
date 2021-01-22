class UserServer < ApplicationRecord

    validates :user_id, uniqueness: {scope: :server_id, message: "already in server"}

    after_destroy :delete_server_if_owner_left

    belongs_to :user
    belongs_to :server

    def delete_server_if_owner_left
        if Server.find_by(id: self.server_id) && Server.find_by(id: self.server_id).owner_id == self.user_id
            Server.find(self.server_id).destroy
        end
    end

end
