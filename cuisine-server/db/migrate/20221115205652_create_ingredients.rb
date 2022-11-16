class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :calories 
      t.string :name
      t.string :picture
    end
    
  end
end
