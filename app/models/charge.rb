class Charge < ApplicationRecord
  belongs_to :chargeable, polymorphic: true
  validates_presence_of :chargeable, :amount_cents, :token
  validates :amount_cents, numericality: { only_integer: true }

  def process_payment(user)
    Stripe.api_key = ENV["STRIPE_SECRET"]
    Stripe::Charge.create amount: self.amount_cents,
                          description: "Abo pour #{user.email} (#{self.chargeable.start_date}/#{self.chargeable.end_date})",
                          currency: 'eur',
                          source: self.chargeable.token
  end
end
