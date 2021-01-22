class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :link, null: false, unique: true, index: true
      t.boolean :direct_message, null: false
      t.integer :creator_id, null: false, index: true
      t.timestamps
    end
  end
end
