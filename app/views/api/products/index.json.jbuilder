
@products.each do |product|
    json.set! product.id do 
        json.extract! product, :title, :description, :price
    end
end