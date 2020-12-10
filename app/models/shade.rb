# == Schema Information
#
# Table name: shades
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  img_url    :string           not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Shade < ApplicationRecord
    validates :name, :img_url, :product_id, presence: true; 

    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product 
end
