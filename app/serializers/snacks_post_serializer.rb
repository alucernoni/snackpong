class SnacksPostSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :xp, :views, :post_image_url
  has_many :comments
  belongs_to :user
end
