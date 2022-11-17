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
        all.sort_by(&:get_rating).reverse
    end



end
