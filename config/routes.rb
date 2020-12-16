Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
  end 
  
  get '/api/products/search/:search_term', to: 'api/products#search'


  root "static_pages#root"
end
