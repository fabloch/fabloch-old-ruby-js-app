# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

user = User.create!(email: 'user@example.com', password: 'password', password_confirmation: 'password')

Profile.create!(
  user: user,
  username: "sebabouche",
  firstname: "Sébastien",
  lastname: "Nicolaïdis",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  birthday: Date.new(1979, 9, 13)
)
