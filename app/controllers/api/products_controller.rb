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
        # use LIKE keyword sql query string 
        # @products = Product.where(title: params[:search_term])
        
        # LIKE 
        @products = Product.where("title = ?", params[:search_term])
        # debugger
        # Client.where("orders_count = ?", params[:orders])

        render "api/products/index"
    end
end
