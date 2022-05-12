class Trip < ApplicationRecord
    has_many :user_trips
    has_many :users, through: :user_trips
    has_many :meals
    has_many :inventories
    has_many :activities
end
