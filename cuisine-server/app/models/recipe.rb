class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :joinirs
    has_many :ingredients, through: :joinirs
    has_many :users, through: :lists
    has_many :ratings
    has_many :users, through: :ratings
    has_many :steps

    def recipe_ingredients
        self.joinirs.map(&:list_ingredients)
    end

    def get_rating
        self.ratings.average(:rate).to_f
    end

    def self.by_rating
        self.joins(:ratings).group(:recipe_id).order("AVG(rate) DESC")
    end

    def ingredient_calories
        self.joinirs.map {|joinir| joinir.amount * joinir.ingredient.calories}
    end

    def total_calories
        self.ingredient_calories.sum
    end

end
