# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'date'

puts "seeding..."

user1 = User.create(email: "h@gmail.com", password: "123456789", name: "Hain", diet_restriction: "none")

trip1 = Trip.create(name: "beach", start_date: Date.parse("16/06/2022"), end_date: Date.parse("18/06/2022"))

UserTrip.create( trip_id: trip1.id, user_id: user1.id)

activity1 = Activity.create(name: "golf", description: "play golf", trip_id: trip1.id, schedule: "test", likes: 0, link: "test_link")

meal1 = Meal.create(dish: "fish", cook: "Jay")

puts "done"