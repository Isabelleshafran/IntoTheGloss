
@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :price
        json.imgUrl url_for(product.image)
    end
end