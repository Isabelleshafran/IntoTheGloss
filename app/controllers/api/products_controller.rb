class Api::ProductsController < ApplicationController

    def index 
        @products = Products.all
        render "api/products/index"
    end

    def show 
        @product = Product.find_by(id: params[:id])

        if @product 
            render "api/products/show"
        end
    end
end
