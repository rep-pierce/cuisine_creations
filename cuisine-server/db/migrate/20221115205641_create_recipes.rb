class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t| 
      t.string :name
      t.string :picture
      t.belongs_to :user
    end

      
  end
end
