class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :reply_id, :snacks_posts_id
end
