class CreateSteps < ActiveRecord::Migration[6.1]
  def change
    create_table :steps do |t|
      t.belongs_to :recipe 
      t.string :action
    end
  
  end
end
