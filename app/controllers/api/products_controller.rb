class Api::ProductsController < ApplicationController

    def index 
        if params[:name] === 'shopall'
            @products = Product.all
            # debugger
            render "api/products/index"
            # debugger
        else 
            @products = Product.joins(:category).where(categories: { name: params[:name]} )
            # debugger
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
