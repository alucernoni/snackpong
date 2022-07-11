class CreateXpJoiners < ActiveRecord::Migration[6.1]
  def change
    create_table :xp_joiners do |t|
      t.references :user, null: false, foreign_key: true
      t.references :snacks_post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
