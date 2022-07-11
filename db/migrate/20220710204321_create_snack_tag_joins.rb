class CreateSnackTagJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :snack_tag_joins do |t|
      t.references :snacks_post, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
