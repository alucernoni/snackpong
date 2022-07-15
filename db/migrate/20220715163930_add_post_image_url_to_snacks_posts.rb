class AddPostImageUrlToSnacksPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :snacks_posts, :post_image_url, :string
  end
end
