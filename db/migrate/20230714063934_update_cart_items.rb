class UpdateCartItems < ActiveRecord::Migration[7.0]
  def change
    change_column :cart_items, :transaction_id, :integer, null: true
  end
end
