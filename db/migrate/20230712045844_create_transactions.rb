class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.float :totalamount

      t.timestamps
    end
  end
end
