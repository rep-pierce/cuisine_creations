class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :rate
      t.belongs_to :user 
      t.belongs_to :recipe
    end
  end
end
