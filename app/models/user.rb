class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :replies, dependent: :destroy
    has_many :xp_joiners, dependent: :destroy
    has_many :snacks_posts, dependent: :destroy
end
