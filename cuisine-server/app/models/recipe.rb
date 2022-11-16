class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :joinirs
    has_many :ingredients, through: :joinirs
    has_many :users, through: :lists
    has_many :ratings
    has_many :users, through: :ratings

    def recipe_ingredients
        self.joinirs.map(&:list_ingredients)
    end

end
