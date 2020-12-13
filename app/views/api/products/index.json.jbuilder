
@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :price, :img_url
        json.imgUrl asset_path("products/#{product.img_url}")
    end
end