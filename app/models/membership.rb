class Membership < ApplicationRecord
  belongs_to :user
  has_one :charge, as: :chargeable

  validates_presence_of [:user, :version, :start_date, :end_date,
                         :price_cents, :payment_method, :status]

  monetize :price_cents
end
