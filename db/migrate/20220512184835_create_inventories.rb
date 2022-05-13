class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.string :items
      t.string :snacks
      t.string :booze
      t.string :wishlist_items
      t.boolean :can_bring
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
