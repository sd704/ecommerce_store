Rails.application.routes.draw do
  root 'home#index'
  get '/search', to: "home#search"
  get '/login', to: "home#login"
  get '/register', to: "home#register"
  get '/product', to: "home#product"
  get '/addproduct', to: "home#addproduct"
  get '/cart', to: "home#cart"
  get '/orders', to: "home#orders"
  get '/listings', to: "home#listings"
  get '/checkout', to: "home#checkout"
  get '/profile', to: "home#profile"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
