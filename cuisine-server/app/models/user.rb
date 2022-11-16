class User < ActiveRecord::Base
    has_many :recipes
    has_many :lists
    has_many :ratings
    has_many :recipes, through: :lists
    has_many :ratings
    has_many :recipes, through: :ratings
end
