class EditProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :img_url
  end
end
