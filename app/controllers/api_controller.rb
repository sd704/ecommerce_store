class ApiController < ApplicationController

    skip_before_action :verify_authenticity_token, only: [:adduser, :authenticateuser, :addproduct]
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

    def updateproduct
    end

    def getcart
    end

    def updatecartitem
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
end
