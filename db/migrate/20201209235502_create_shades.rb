class CreateShades < ActiveRecord::Migration[5.2]
  def change
    create_table :shades do |t|
      t.string :name, null: false 
      t.string :img_url, null: false 
      t.integer :product_id, null: false 
      t.timestamps
    end
  end
end
