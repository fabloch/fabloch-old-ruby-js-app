class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.string :username
      t.string :firstname
      t.string :lastname
      t.string :description
      t.date :birthday

      t.timestamps
    end

    add_index :profiles, :username, unique: true    
  end
end
