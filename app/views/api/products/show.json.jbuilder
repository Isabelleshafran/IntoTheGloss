

json.extract! @product, :id, :title, :description, :details, :price, :category_id, :whyspecial, :img_url
json.imgUrl asset_path("products/#{@product.img_url}")