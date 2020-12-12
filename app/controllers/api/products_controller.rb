class Api::ProductsController < ApplicationController

    def index 
        if params[:name] === 'shopall'
            @products = Product.all
            render "api/products/index"
        elsif params[:name] === "/"
            # Product.where("product.title LIKE '%'")
            @products = Product.where(:title => ["Futuredew", "Boy Brow", "Cloud Paint", "Hand Cream", "Generation G", "Milk Jelly Cleanser", "Solution"])
            # @products = Product.all
            render "api/products/index"  
        else 
            @products = Product.joins(:category).where(categories: { name: params[:name]} )
            render "api/products/index"
        end
    end

    def show 
        @product = Product.find_by(id: params[:id])
        if @product 
            render "api/products/show"
        end
    end
end
