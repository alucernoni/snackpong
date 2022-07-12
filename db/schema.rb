# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_11_230038) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.bigint "snacks_post_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["snacks_post_id"], name: "index_comments_on_snacks_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "replies", force: :cascade do |t|
    t.string "reply"
    t.bigint "user_id", null: false
    t.bigint "comment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comment_id"], name: "index_replies_on_comment_id"
    t.index ["user_id"], name: "index_replies_on_user_id"
  end

  create_table "snack_tag_joins", force: :cascade do |t|
    t.bigint "snacks_post_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["snacks_post_id"], name: "index_snack_tag_joins_on_snacks_post_id"
    t.index ["tag_id"], name: "index_snack_tag_joins_on_tag_id"
  end

  create_table "snacks_posts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.integer "xp", default: 0
    t.integer "views", default: 0
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_snacks_posts_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "profile_name"
    t.string "profile_image_url"
    t.text "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "xp_joiners", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "snacks_post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["snacks_post_id"], name: "index_xp_joiners_on_snacks_post_id"
    t.index ["user_id"], name: "index_xp_joiners_on_user_id"
  end

  add_foreign_key "comments", "snacks_posts"
  add_foreign_key "comments", "users"
  add_foreign_key "replies", "comments"
  add_foreign_key "replies", "users"
  add_foreign_key "snack_tag_joins", "snacks_posts"
  add_foreign_key "snack_tag_joins", "tags"
  add_foreign_key "snacks_posts", "users"
  add_foreign_key "xp_joiners", "snacks_posts"
  add_foreign_key "xp_joiners", "users"
end
