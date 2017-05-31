# require "stripe"
# Stripe.api_key = ENV['STRIPE_PUBLIC_TEST']
#
# @token = Stripe::Token.create(
#   :card => {
#     :number => "4242424242424242",
#     :exp_month => 5,
#     :exp_year => (Time.now + 1.year).strftime("%Y"),
#     :cvc => "314"
#   },
# )

FactoryGirl.define do
  factory :charge do
    chargeable { |charge| charge.association(:subscription) }
    amount_cents 200
    token "tok_1APSSRCmXyq7UjNbrK5tWSQz"
  end
end

# tok_1APSSRCmXyq7UjNbrK5tWSQz
# tok_1APSV3CmXyq7UjNbS9oLE7bW``
