class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :channel_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.timestamps
    end
  end
end
