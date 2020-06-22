class Table < ApplicationRecord
    has_many :items

    def total_price
        prices = []
        items.each do |item|
            prices.push(item.price)
        end
        prices.inject(:+)
    end

end
