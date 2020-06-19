class TableSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number
  
  has_many :items
end
