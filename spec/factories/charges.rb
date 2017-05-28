FactoryGirl.define do
  factory :charge do
    chargeable { |charge| charge.association(:subscription) }
    amount_cents 200
  end
end
