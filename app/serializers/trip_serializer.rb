class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :location, :listing, :picture
  has_many :activities
  has_many :inventories
  has_many :meals
end
