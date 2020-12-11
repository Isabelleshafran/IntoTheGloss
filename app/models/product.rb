# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  img_url     :string           not null
#  description :string           not null
#  details     :text             not null
#  price       :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :title, :description, :details, :price, :category_id, presence: true

    belongs_to :category, 
        foreign_key: :category_id, 
        class_name: :Category 

    has_many :shades, 
        foreign_key: :product_id, 
        class_name: :Shade

    has_one_attached :image
end
