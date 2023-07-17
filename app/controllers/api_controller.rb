class ApiController < ApplicationController
    before_action :require_login, only: [:addproduct, :addtocart ]
    # protect_from_forgery prepend: true
    skip_before_action :verify_authenticity_token, only: [:adduser, :authenticateuser, :addproduct, :editproduct, :addtocart, :updatecart, :payment]
    # This will skip the authenticity token verification for the adduser action while keeping it intact for other actions.

    def getproducts
        # @items = Item.all
        # @items = Item.find(params[:id])
    end

    # def sortproducts
    # end

    def addproduct
        @item = Item.new
        @item.name=params[:name]
        @item.desc=params[:desc]
        @item.brand=params[:brand]
        @item.category=params[:category]
        @item.price=params[:price]
        @item.stock=params[:stock]
        @item.user_id=session[:user_id]

        if @item.save
            redirect_to home_path
        else
            redirect_to appproduct_path
        end
    end

    def editproduct
        item = Item.find(params[:id])
        item.name=params[:name]
        item.desc=params[:desc]
        item.brand=params[:brand]
        item.category=params[:category]
        item.price=params[:price]
        item.stock=params[:stock]
        if item.save
            redirect_to '/product/%s' % params[:id]
        end
    end

    def updateproduct
    end

    def addtocart
        @cartItem = CartItem.new
        @cartItem.itemcount = params[:count]
        @cartItem.user_id = session[:user_id]
        @cartItem.item_id = params[:item_id]
        if @cartItem.save
            render json: { success: true }
        end
    end

    def updatecart
        item = CartItem.find(params[:id])

        if params[:count].to_i == 0
            item.destroy
            render json: { success: true }
        else item.update(itemcount: params[:count])
            render json: { success: true }
        end
    end

    def payment
        transaction = Transaction.new(user_id: session[:user_id], totalamount: params[:sum].to_f)
        if transaction.save
            if CartItem.where(user_id: session[:user_id], hasPurchased: nil).update_all(hasPurchased: true, transaction_id: transaction.id)
                # if Item.joins(:cart_items).where(cart_items: { transaction_id: transaction.id }).update_all('items.stock = items.stock - cart_items.itemcount')
                if Item.connection.execute("
                    UPDATE items
                    SET stock = stock - cart_items.itemcount
                    FROM cart_items
                    WHERE cart_items.transaction_id = #{transaction.id}
                      AND cart_items.item_id = items.id
                  ")
                    render json: { success: true }
                end
            end
        end
    end

    def getorders
    end    

    # def getuser
    #     # @user = User.find(params[:id])
    #     # @user = User.find_by(email: user_params[:email])
    #     @user = User.find(id: session[:user_id])
    # end

    def adduser
        @user = User.new
        # @user = User.new(user_params)

        @user.email=params[:email]
        @user.password=params[:password]
        @user.firstname=params[:firstname]
        @user.lastname=params[:lastname]
        @user.dob=params[:dob]
        @user.address=params[:address]
        @user.phone=params[:phone]
        
        if @user.save
            session[:user_id] = @user.id
            redirect_to home_path
        else
            redirect_to register_path
            # render :register
        end
    end

    def authenticateuser
        if user = User.authenticate(params[:email], params[:password])
            session[:user_id] = user.id
            redirect_to home_path
        else
            redirect_to login_path
        end
    end

    def updateuser
        @user = User.new(user_params)

        if user.update_attributes(user_params)
            session[:user_id] = @user.id
            redirect_to :action => 'profile'
        else
            redirect_to :action => 'updateuser'
        end
    end

    def deleteuser
        User.find(params[:id]).destroy
        redirect_to :action => 'home'
    end

    def getreview
    end

    def addreview
    end

    def updatereview
    end

    # private 

    # def user_params
    #     params.require(:user).permit(:firstname, :lastname, :dob, :phone, :email, :password, :address)
    # end


  private

  def require_login
    unless logged_in?
      redirect_to login_path, notice: 'Please log in to access this page.'
    end
  end

  def logged_in?
    session[:user_id].present?
  end
end
