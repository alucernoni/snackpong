class SnacksPostSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :xp, :views
  has_many :comments
  belongs_to :user
end
