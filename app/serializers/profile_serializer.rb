class ProfileSerializer < ActiveModel::Serializer
  attributes :username, :firstname, :lastname, :description, :birthday
end
