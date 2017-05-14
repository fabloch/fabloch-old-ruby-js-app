class Profile < ActiveRecord::Migration[5.0]
  def change
    add_index :profiles, :username, unique: true
  end
end
