class SnackTagJoinSerializer < ActiveModel::Serializer
  attributes :id
  has_one :snacks_post
  has_one :tag
end
