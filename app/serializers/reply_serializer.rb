class ReplySerializer < ActiveModel::Serializer
  attributes :id, :reply
  has_one :comment
  has_one :user
end
