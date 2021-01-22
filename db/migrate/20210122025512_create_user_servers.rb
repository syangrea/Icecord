class CreateUserServers < ActiveRecord::Migration[5.2]
  def change
    create_table :user_servers do |t|
      t.integer :user_id, null: false, index: true
      t.integer :server_id, null: false, index: true
      t.timestamps
    end
  end
end
