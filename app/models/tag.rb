class Tag < ApplicationRecord
    has_many :snack_tag_joins, dependent: :destroy
    has_many :snacks_posts, through: :snack_tag_joins
    
end
