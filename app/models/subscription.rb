class Subscription < ApplicationRecord
  belongs_to :user
  has_one :charge, as: :chargeable

  validates_presence_of [:user, :plan, :start_date, :end_date,
                         :price_cents, :payment_method, :status]

  monetize :price_cents

  alias_attribute :paymentMethod, :payment_method
  alias_attribute :priceCents, :price_cents
  alias_attribute :start, :start_date
  alias_attribute :end, :end_date
end
