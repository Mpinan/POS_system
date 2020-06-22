class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :itemType, :allergens, :price, :table_id
end
