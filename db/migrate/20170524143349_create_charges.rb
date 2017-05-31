class CreateCharges < ActiveRecord::Migration[5.0]
  def change
    create_table :charges do |t|
      t.references :chargeable, polymorphic: true, index: true
      t.integer :amount_cents
      t.string :token

      t.timestamps
    end
  end
end
