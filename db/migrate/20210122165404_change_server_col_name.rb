class ChangeServerColName < ActiveRecord::Migration[5.2]
  def change
    rename_column :servers, :creator_id, :owner_id
  end
end
