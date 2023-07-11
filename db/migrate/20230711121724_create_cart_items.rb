class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :itemcount
      t.boolean :hasPurchased

      t.timestamps
    end
  end
end
