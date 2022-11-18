class CreateJoinirs < ActiveRecord::Migration[6.1]
  def change
    create_table :joinirs do |t|
      t.belongs_to :recipe
      t.belongs_to :ingredient
      t.integer :amount
    end 
  end
end
