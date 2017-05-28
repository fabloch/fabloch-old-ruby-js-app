class ProfileSerializer < ActiveModel::Serializer
  attributes  :username,
              :firstname,
              :lastname,
              :description,
              :birthday,
              :img_large,
              :img_medium,
              :img_small

  def img_large
    object.avatar.url(:large)
  end

  def img_medium
    object.avatar.url(:medium)
  end

  def img_small
    object.avatar.url(:small)
  end
end
