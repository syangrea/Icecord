class Channel < ApplicationRecord

    validates :name, presence: true

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    belongs_to :server

    has_many :messages, dependent: :destroy

end
