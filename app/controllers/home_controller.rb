class HomeController < ApplicationController
  
  def index
      @items = Item.order(created_at: :desc)
  end

  def login
  end

  def register
  end

  def logout
      session.delete(:user_id)
      @_current_user = nil
      redirect_to root_url, status: :see_other
  end

  def product
      @item = Item.find(params[:id])
      seller = User.find(@item.user_id)
      @sellername = seller.firstname+" "+seller.lastname
  end

  def addproduct
  end

  def cart
  end

  def orders
  end

  def checkout
  end

  def listings
  end

  def search
  end

  def profile
      @user = User.find(session[:user_id])
  end

  # def serve_font
  #   path = Rails.root.join("app", "assets", "fonts", params[:file])
  #   send_file path, type: "font/ttf", disposition: "inline"
  # end

end
