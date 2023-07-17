class HomeController < ApplicationController
  helper_method :logged_in?
  before_action :require_login, only: [:cart, :profile, :addproduct, :orders, :checkout, :listings]
  before_action :is_user_seller, only: [:editproduct]
  
  def index
      @items = Item.order(created_at: :desc)
  end

  def login
  end

  def register
  end

  def logout
      session.delete(:user_id)
      # @_current_user = nil
      redirect_to root_path, notice: 'Logged out successfully.'
      # render json: { success: true }
  end

  def product
      @item = Item.find(params[:id])
      seller = User.find(@item.user_id)
      @sellername = seller.firstname+" "+seller.lastname
      @is_seller = @item.user_id == session[:user_id]
  end

  def addproduct
  end

  def editproduct
    @item = Item.find(params[:id])
  end

  def cart
      # @items = Item.joins(:cart_items).where(cart_items: { user_id: session[:user_id] }).select(:id, :price, :name, :itemcount, :stock)
      @items = Item.joins(:cart_items)
             .where(cart_items: { user_id: session[:user_id], hasPurchased: nil })
             .select('items.id AS id, cart_items.id AS cart_item_id, items.price, items.name, cart_items.itemcount, items.stock')
  end

  def orders
    @items = Item.joins(:cart_items)
             .where(cart_items: { user_id: session[:user_id], hasPurchased: true })
             .select('items.id AS id, cart_items.id AS cart_item_id, items.price, items.name, cart_items.itemcount, items.stock')
  end

  def checkout
  end

  def listings
    @items = Item.where(user_id:session[:user_id]).order(created_at: :desc)
  end

  def search
  end
  
  def customsearch
    name = params[:name]
    low = params[:lower]
    high = params[:higher]
    brand = params[:brand]
    category = params[:category]

    items = Item.all
    items = items.where('name LIKE ?', "%#{name}%") if name.present?
    items = items.where('price < ?', high) if high.present?
    items = items.where('price > ?', low) if low.present?
    items = items.where('category LIKE ?', "%#{category}%") if category.present?
    items = items.where('brand LIKE ?', "%#{brand}%") if brand.present?

    render json: { list: items }
  end

  def profile
      @user = User.find(session[:user_id])
  end

  private

  def require_login
    unless logged_in?
      redirect_to login_path, notice: 'Please log in to access this page.'
    end
  end

  def logged_in?
    session[:user_id].present?
  end

  def is_user_seller
    if Item.find(params[:id]).user_id != session[:user_id]
      # redirect_to '/product/%s' % params[:id]
      redirect_to home_path
    end
  end

end
