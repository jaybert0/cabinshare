class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :name, :diet_restriction
  has_many :trips
end
