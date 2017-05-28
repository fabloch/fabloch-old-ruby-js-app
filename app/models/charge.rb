class Charge < ApplicationRecord
  belongs_to :chargeable, polymorphic: true
  validates_presence_of :chargeable, :amount_cents
  validates :amount_cents, numericality: { only_integer: true }  
end
