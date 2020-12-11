class EditShades < ActiveRecord::Migration[5.2]
  def change
    remove_column :shades, :img_url
  end
end
