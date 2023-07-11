class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :desc
      t.string :brand
      t.string :category
      t.float :price
      t.integer :stock
      t.float :rating

      t.timestamps
    end
  end
end
