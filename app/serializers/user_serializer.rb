class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_name, :profile_image_url, :bio
end
