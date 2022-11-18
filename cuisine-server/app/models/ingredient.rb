class Ingredient < ActiveRecord::Base
    has_many :joinirs
    has_many :recipes, through: :joinirs

end