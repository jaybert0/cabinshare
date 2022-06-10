class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :schedule, :likes, :link, :comments
  has_many :comments
end
