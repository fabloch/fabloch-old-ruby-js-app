class Profile < ApplicationRecord
  belongs_to :user

  validates_presence_of [:username]
  validates_uniqueness_of [:username]

  validates :username, format: {
    with: /\A[a-z0-9_]+\Z/,
    message: "Only allows lowercase letters or \"_\"" }
  validates :username, length: { in: 3..20 }
  validates :description, length: { in: 3..140 }

  # def username=(string)
  #   return super string unless string
  #   super string.strip.downcase
  # end
end
