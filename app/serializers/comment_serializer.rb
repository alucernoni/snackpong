class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :reply_ids, :snacks_post_id
  has_many :replies
  has_one :snacks_post
end
