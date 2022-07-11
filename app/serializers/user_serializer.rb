class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :profile_name, :profile_image_url, :bio
end
