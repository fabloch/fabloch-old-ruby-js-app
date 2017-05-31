FactoryGirl.define do
  factory :subscription do
    user
    plan "regular"
    start_date "2017-05-24"
    end_date "2018-05-23"
    price_cents 2000
    payment_method "checkOrCash"
    confirmed false
  end
end
