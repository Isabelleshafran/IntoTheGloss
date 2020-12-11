
@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :price
    end
end