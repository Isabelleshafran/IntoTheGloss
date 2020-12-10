

json.product do 
    json.set! @product.id do 
        json.extract! @product, :title, :img_url, :description, :details, :price, :category_id
    end
end