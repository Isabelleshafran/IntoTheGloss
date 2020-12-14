

json.extract! @product, :id, :title, :description, :details, :price, :category_id, :whyspecial
json.imgUrl asset_path("products/#{@product.img_url}")


if @product.shades.length != 0 
  json.shades do 
    @product.shades.each do |shade| 
      json.set! shade.id do 
        json.extract! shade, :id, :product_id, :name
        json.imgUrl asset_path("shades/#{shade.img_url}") 
      end
    end
  end
else
  json.shades ({})
end
