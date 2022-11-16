class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t| 
      t.belongs_to :user 
      t.belongs_to :recipe 
    end
  end
end
