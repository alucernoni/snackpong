class SnacksPostSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :xp, :views
end
