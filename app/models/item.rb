class Item < ApplicationRecord
    # belongs_to :user, foreign_key: 'user_id', class_name: 'User'
    belongs_to :user
    has_many :cart_items
end
