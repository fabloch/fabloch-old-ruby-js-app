class Profile < ApplicationRecord
  belongs_to :user

  validates_presence_of [:username]
  validates_uniqueness_of [:username]

  validates :username, format: {
    with: /\A[a-z0-9_]+\Z/,
    message: "only allows lowercase letters or \"_\"" }
  validates :username, length: { in: 3..20 }
  validates :description, length: { in: 3..140 }, allow_blank: true

  mount_uploader :avatar, AvatarUploader
end
