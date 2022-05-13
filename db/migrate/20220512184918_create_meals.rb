class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :dish
      t.string :cook
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
