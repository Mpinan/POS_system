class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :type
      t.string :allergens
      t.integer :price
      t.belongs_to :table, null: false, foreign_key: true

      t.timestamps
    end
  end
end
