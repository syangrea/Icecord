# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo123 = User.create(email: "demo123@gmail.com", username: "demo123", password: "password")

u1 =  User.create(email: "katara@gmail.com", username: "katara", password: "password")
u2 =  User.create(email: "korra@gmail.com", username: "korra", password: "password")
u3 =  User.create(email: "zuko@gmail.com", username: "zuko", password: "password")
u4 =  User.create(email: "toph@gmail.com", username: "toph", password: "password")
u5 =  User.create(email: "batman@gmail.com", username: "batman", password: "password")
u6 =  User.create(email: "robin@gmail.com", username: "robin", password: "password")
u7 =  User.create(email: "greenlantern@gmail.com", username: "greenlantern", password: "password")
u8 =  User.create(email: "ironman@gmail.com", username: "ironman", password: "password")
u9 =  User.create(email: "thor@gmail.com", username: "thor", password: "password")
u10 =  User.create(email: "hulk0@gmail.com", username: "hulk", password: "password")

sd1 = Server.create(name: "Demo Server Earth", direct_message: false, owner_id: demo123.id)
sd2 = Server.create(name: "Demo Server Mars", direct_message: false, owner_id: demo123.id)
sd3 = Server.create(name: "Demo Server Jupiter", direct_message: false, owner_id: demo123.id)

s1 = Server.create(name: "Pokemon", direct_message: false, owner_id: u1.id)
s2 = Server.create(name: "League of Legends", direct_message: false, owner_id: u2.id)
s3 = Server.create(name: "Smash Bros", direct_message: false, owner_id: u3.id)
s4 = Server.create(name: "aA", direct_message: false, owner_id: u4.id)
s5 = Server.create(name: "Amazon Deals", direct_message: false, owner_id: u5.id)

usd1 = UserServer.create(user_id: demo123.id, server_id: s1.id)
usd2 = UserServer.create(user_id: demo123.id, server_id: s3.id)
usd3 = UserServer.create(user_id: demo123.id, server_id: s5.id)


us1 = UserServer.create(user_id: u3.id, server_id: s1.id)
us2 = UserServer.create(user_id: u6.id, server_id: s1.id)
us3 = UserServer.create(user_id: u7.id, server_id: s1.id)
us4 = UserServer.create(user_id: u9.id, server_id: s1.id)

us5 = UserServer.create(user_id: u1.id, server_id: s2.id)
us6 = UserServer.create(user_id: u8.id, server_id: s2.id)
us7 = UserServer.create(user_id: u10.id, server_id: s2.id)
us8 = UserServer.create(user_id: u5.id, server_id: s2.id)

us9 = UserServer.create(user_id: u2.id, server_id: s3.id)
us10 = UserServer.create(user_id: u5.id, server_id: s3.id)
us11 = UserServer.create(user_id: u7.id, server_id: s3.id)
us12 = UserServer.create(user_id: u10.id, server_id: s3.id)

us13 = UserServer.create(user_id: u1.id, server_id: s4.id)
us14 = UserServer.create(user_id: u7.id, server_id: s4.id)
us15 = UserServer.create(user_id: u8.id, server_id: s4.id)
us16 = UserServer.create(user_id: u9.id, server_id: s4.id)

us17 = UserServer.create(user_id: u1.id, server_id: s5.id)
us18 = UserServer.create(user_id: u2.id, server_id: s5.id)
us19 = UserServer.create(user_id: u3.id, server_id: s5.id)
us20 = UserServer.create(user_id: u4.id, server_id: s5.id)

