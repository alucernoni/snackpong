class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :replies, :snacks_post_id, :user
  has_many :replies
  has_one :snacks_post
  belongs_to :user
end
