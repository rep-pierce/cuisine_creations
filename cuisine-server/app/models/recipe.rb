class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :joinirs
    has_many :ingredients, through: :joinirs

    def recipe_ingredients
        self.joinirs.map(&:list_ingredients)
    end

end