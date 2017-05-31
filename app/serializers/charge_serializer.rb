class ChargeSerializer < ActiveModel::Serializer
  attributes :token, :amount_cents
end
