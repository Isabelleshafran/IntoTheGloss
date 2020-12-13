

json.extract! @product, :id, :title, :description, :details, :price, :category_id, :whyspecial, :img_url, :shades
json.imgUrl asset_path("products/#{@product.img_url}")
# json.shadeImgUrl asset_path("shades/#{@product.shades.img_url}")

# @product.shades.map(shade => shade.imgUrl)

@product.shades do |shade|
    json.extract! shade, :id, :product_id, :name, :img_url
    json.imgUrl "shades/#{shade.img_url}"
end


# if @product.shades.length != 0 
#   json.shades do 
#     @product.shades.each do |shade| 
#         json.set! shade.id do 
#         json.extract! shade, :id, :product_id, :name, :img_url
#         json.img_url asset_path("/#{shade.img_url}") 
#         # debugger
#       end
#     end 
#   end
# else
#   json.shades ({})
# end