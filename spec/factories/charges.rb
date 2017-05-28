FactoryGirl.define do
  factory :charge do
    chargeable { |charge| charge.association(:membership) }
    amount_cents 200
  end
end
