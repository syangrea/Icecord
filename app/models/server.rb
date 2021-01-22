class Server < ApplicationRecord

    validates :name, :link, presence: true
    validates :link, uniqueness: true
    validates :direct_message, inclusion: {in: [true, false]}
    validate :owner_in_server, on: :update

    after_initialize :ensure_unique_link
    after_create :owner_join

    has_many :user_servers, dependent: :destroy
    has_many :users,
        through: :user_servers

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    

    def owner_in_server
        unless UserServer.find_by(user_id: self.owner_id, server_id: self.id)
            errors.add(:owner_id, "is not a member")
        end
    end

    def self.generate_unique_link
        link = "";
        while link.length == 0 || Server.find_by(link: link)
            link = SecureRandom::urlsafe_base64
        end
        link
    end



    private
    def ensure_unique_link 
        self.link ||= self.class.generate_unique_link
    end

    def owner_join
        UserServer.create(user_id: self.owner_id, server_id: self.id);
    end


end
