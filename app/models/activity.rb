class Activity < ApplicationRecord
  belongs_to :trip
  has_many :comments
end
