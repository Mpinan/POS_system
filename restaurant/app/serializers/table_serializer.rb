class TableSerializer
  include FastJsonapi::ObjectSerializer
  attributes :tableNumber
  
  has_many :items
end
