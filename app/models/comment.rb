class Comment < ApplicationRecord
    has_many :replies, dependent: :destroy
    belongs_to :user
    belongs_to :snacks_post

end
