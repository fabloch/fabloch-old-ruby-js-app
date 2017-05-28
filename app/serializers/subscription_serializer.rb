class SubscriptionSerializer < ActiveModel::Serializer
  # attributes  :paymentMethod,
  #             :priceCents,
  #             :startDate,
  #             :endDate,
  #             :status,
  #             :version
  attributes  :payment_method,
              :price_cents,
              :start_date,
              :end_date,
              :status,
              :version
end
