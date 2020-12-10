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
require 'test_helper'

class ShadeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
