class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.string :type
      t.string :item
      t.string :wishlist_item
      t.boolean :can_bring
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
