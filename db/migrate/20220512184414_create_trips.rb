class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.string :location
      t.string :listing
      t.string :picture

      t.timestamps
    end
  end
end
