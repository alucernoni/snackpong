class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :profile_name
      t.string :profile_image_url
      t.text :bio

      t.timestamps
    end
  end
end
