class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.references :user, foreign_key: true
      t.string :plan
      t.date :start_date
      t.date :end_date
      t.integer :price_cents
      t.string :payment_method
      t.string :status

      t.timestamps
    end
  end
end
