class SnackTagJoin < ApplicationRecord
  belongs_to :snacks_post
  belongs_to :tag
end
