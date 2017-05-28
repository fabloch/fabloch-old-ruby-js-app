FactoryGirl.define do
  factory :membership do
    user
    version "regular"
    start_date "2017-05-24"
    end_date "2018-05-23"
    price_cents 200
    payment_method "checkOrCash"
    status "pending"
  end
end
