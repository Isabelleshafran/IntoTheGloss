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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
