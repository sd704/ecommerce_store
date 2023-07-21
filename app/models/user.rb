class User < ApplicationRecord
    # has_secure_password
    validates :email, presence: true, uniqueness: true
    has_many :items
  
    def self.authenticate(email, password)
        user = find_by(email: email)
        # return user if user&.authenticate(password)
        return user if user && user.password == password
        nil
    end


    def as_json(options = {})
        super(options.merge(except: :password))
    end
end
