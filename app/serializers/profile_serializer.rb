class ProfileSerializer < ActiveModel::Serializer
  attributes  :username,
              :firstname,
              :lastname,
              :description,
              :birthday,
              :imglarge,
              :imgmedium,
              :imgsmall

  def imglarge
    object.avatar.url(:large)
  end

  def imgmedium
    object.avatar.url(:medium)
  end

  def imgsmall
    object.avatar.url(:small)
  end
end
