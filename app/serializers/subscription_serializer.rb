class SubscriptionSerializer < ActiveModel::Serializer
  attributes  :plan,
              :payment_method,
              :price_cents,
              :start_date,
              :end_date,
              :confirmed

end
