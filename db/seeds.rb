# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Activity.create(name: 'Hiking', description: 'Lots of trails around', trip_id: 1, schedule: 'Friday or Saturday', likes: 0 )
Inventory.create(items: 'Cornhole boards, Smash-up (Boardgame), Switch', snacks: 'Chips, pretzels, dried mango', booze: '2 4-packs of IPA and 1 4-pack of sours', wishlist_items: 'Oculus')