class SnacksPost < ApplicationRecord
    belongs_to :user
    has_many :xp_joiners, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :replies, through: :comments 
    has_many :snack_tag_joins, dependent: :destroy
    has_many :tags, through: :snack_tag_joins 
end
