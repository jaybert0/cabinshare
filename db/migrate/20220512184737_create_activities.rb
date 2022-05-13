class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.belongs_to :trip, null: false, foreign_key: true
      t.string :schedule
      t.integer :likes
      t.string :link

      t.timestamps
    end
  end
end
