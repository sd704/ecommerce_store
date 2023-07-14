Rails.application.routes.draw do
  root 'home#index'
  get '/home', to: "home#index"
  get '/search', to: "home#search"
  get '/login', to: "home#login"
  get '/register', to: "home#register"
  get '/product/:id', to: "home#product"
  get '/addproduct', to: "home#addproduct"
  get '/cart', to: "home#cart"
  get '/orders', to: "home#orders"
  get '/listings', to: "home#listings"
  get '/checkout', to: "home#checkout"
  get '/profile', to: "home#profile"

  # get '/getproducts', to: "api#getproducts"
  # get '/getcart', to: "api#getcart"
  # get '/getreview', to: "api#getreview"
  # get '/getorders', to: "api#getorders"
  # # get '/sortproducts', to: "api#sortproducts"

  post '/adduser', to: "api#adduser"
  post '/authenticateuser', to: "api#authenticateuser"
  post '/addproduct', to: "api#addproduct"
  # post '/addreview', to: "api#addreview"

  # post '/updateuser', to: "api#updateuser"
  # post '/updateproduct', to: "api#updateproduct"
  # post '/updatecartitem', to: "api#updatecartitem"
  # post '/updatereview', to: "api#updatereview"
  
  # get "/fonts/:file", to: "home#serve_font"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
