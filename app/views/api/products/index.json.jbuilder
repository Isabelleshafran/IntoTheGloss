
@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :img_url, :description, :price
    end
end