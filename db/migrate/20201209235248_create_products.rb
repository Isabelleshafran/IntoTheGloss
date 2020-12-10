class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :img_url, null: false 
      t.string :description, null: false 
      t.text :details, null: false 
      t.integer :price, null: false 
      t.integer :category_id, null: false 
      t.timestamps
    end
  end
end
