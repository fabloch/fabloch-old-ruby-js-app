class Profile < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  belongs_to :user

  validates_presence_of [:username]
  validates_uniqueness_of [:username]

  validates :username, format: {
    with: /\A[a-z0-9_]+\Z/,
    message: "Sont acceptés chiffres, minuscules et le tiret du bas \"_\""}
  validates :username, length: { in: 3..20 }
  validates :description, length: { in: 3..140 }, allow_blank: true
end
