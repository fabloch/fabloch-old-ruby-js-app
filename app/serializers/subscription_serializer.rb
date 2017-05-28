class SubscriptionSerializer < ActiveModel::Serializer
  attributes  :payment_method,
              :price_cents,
              :start_date,
              :end_date,
              :status,
              :plan
end
