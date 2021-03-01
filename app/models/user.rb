class User < ApplicationRecord

    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :username, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :photo
    has_many :user_servers
    has_many :servers,
        through: :user_servers
    
    has_many :owned_servers,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Server

    has_many :created_channels,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :Channel

    has_many :messages
    
       
    #  may want to have an association for private servers. can use has many with sql where

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end


    private
    def ensure_session_token 
        self.session_token ||= self.class.generate_session_token
    end


end
