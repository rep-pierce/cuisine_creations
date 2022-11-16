class Joinir < ActiveRecord::Base
    belongs_to :recipe
    belongs_to :ingredient

    def list_ingredients 
        "#{self.ingredient.name}"
    end
end