class User < ApplicationRecord
    alias_attribute :password_digest, :password
    has_secure_password

    has_many :tables
    has_many :items

    validates_presence_of :email
    validates_uniqueness_of :email
end
