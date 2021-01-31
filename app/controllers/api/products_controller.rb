class Api::ProductsController < ApplicationController

    def index 
        if params[:name] === 'shopall'
            @products = Product.all
            render "api/products/index"
        elsif params[:name] === "/"
            @products = Product.where(:title => ["Futuredew", "Boy Brow", "Cloud Paint", "Hand Cream", "Generation G", "Milk Jelly Cleanser", "Solution"])
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

    def search 
        @products = Product.where("title LIKE ?", "%#{params[:search_term]}%")
        # @products = Product.where("title LIKE :search OR description LIKE :search", search: "%#{params[:search_term]}%")
        render "api/products/index"
    end
end
