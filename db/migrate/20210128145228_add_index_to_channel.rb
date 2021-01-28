class AddIndexToChannel < ActiveRecord::Migration[5.2]
  def change

    add_index :channels, :server_id
    add_index :channels, :creator_id
  end
end
