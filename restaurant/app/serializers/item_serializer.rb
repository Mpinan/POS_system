class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :type, :allergens, :price, :table_id
end
