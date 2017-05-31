class Subscription < ApplicationRecord
  belongs_to :user
  has_one :charge, as: :chargeable
  attr_accessor :token

  validates_presence_of [:user, :plan, :start_date, :end_date,
                         :price_cents, :payment_method]

  validates :payment_method,
    inclusion: { in: ['card', 'checkOrCash'],
    message: "%{value} is not a valid relationship status" }

  monetize :price_cents

  alias_attribute :paymentMethod, :payment_method
  alias_attribute :priceCents, :price_cents
  alias_attribute :startDate, :start_date
  alias_attribute :endDate, :end_date
end
