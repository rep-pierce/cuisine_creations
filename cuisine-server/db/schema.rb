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

ActiveRecord::Schema.define(version: 2022_11_15_232536) do

  create_table "ingredients", force: :cascade do |t|
    t.integer "calories"
    t.string "name"
    t.string "picture"
  end

  create_table "joinirs", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "ingredient_id"
    t.index ["ingredient_id"], name: "index_joinirs_on_ingredient_id"
    t.index ["recipe_id"], name: "index_joinirs_on_recipe_id"
  end

  create_table "lists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
    t.index ["recipe_id"], name: "index_lists_on_recipe_id"
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "rate"
    t.integer "user_id"
    t.integer "recipe_id"
    t.index ["recipe_id"], name: "index_ratings_on_recipe_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.index ["user_id"], name: "index_recipes_on_user_id"
  end

  create_table "steps", force: :cascade do |t|
    t.integer "recipe_id"
    t.string "action"
    t.index ["recipe_id"], name: "index_steps_on_recipe_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "username"
    t.string "password"
  end

end
