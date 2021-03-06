# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


UserServer.destroy_all
Server.destroy_all
User.destroy_all
Channel.destroy_all

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

file = open('https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg')
demo123.photo.attach(io: file, filename: 'demo123.jpg')
file1 = open('https://icecord-seed.s3.amazonaws.com/user/user/katara.jfif')
u1.photo.attach(io: file1, filename: 'katara.jfif')
file2 = open('https://icecord-seed.s3.amazonaws.com/user/user/korra.jfif')
u2.photo.attach(io: file2, filename: 'korra.jfif')
file3 = open('https://icecord-seed.s3.amazonaws.com/user/user/zuko.jfif')
u3.photo.attach(io: file3, filename: 'zuko.jfif')
file4 = open('https://icecord-seed.s3.amazonaws.com/user/user/toph.jfif')
u4.photo.attach(io: file4, filename: 'toph.jfif')
file5 = open('https://icecord-seed.s3.amazonaws.com/user/user/batman.jfif')
u5.photo.attach(io: file5, filename:'batman.jfif' )
file6 = open('https://icecord-seed.s3.amazonaws.com/user/user/robin.jfif')
u6.photo.attach(io: file6, filename:'robin.jfif' )
file7 = open('https://icecord-seed.s3.amazonaws.com/user/user/greenlantern.jfif')
u7.photo.attach(io: file7, filename: 'greenlantern.jfif')
file8 = open('https://icecord-seed.s3.amazonaws.com/user/user/ironman.jfif')
u8.photo.attach(io: file8, filename: 'ironman.jfif')
file9 = open('https://icecord-seed.s3.amazonaws.com/user/user/thor.jfif')
u9.photo.attach(io: file9, filename:'thor.jfif' )
file10 = open('https://icecord-seed.s3.amazonaws.com/user/user/hulk.jfif')
u10.photo.attach(io: file10, filename: 'hulk.jfif')


sd1 = Server.create(name: "Demo Server Earth", direct_message: false, owner_id: demo123.id)
sd2 = Server.create(name: "Demo Server Mars", direct_message: false, owner_id: demo123.id)
sd3 = Server.create(name: "Demo Server Jupiter", direct_message: false, owner_id: demo123.id)

sdf1 = open('https://icecord-seed.s3.amazonaws.com/server/server/earth.jfif')
sd1.photo.attach(io: sdf1, filename: 'earth.jfif')
sdf2 = open('https://icecord-seed.s3.amazonaws.com/server/server/mars.jfif')
sd2.photo.attach(io: sdf2, filename: 'mars.jfif')
sdf3 = open('https://icecord-seed.s3.amazonaws.com/server/server/jupiter.jfif')
sd3.photo.attach(io: sdf3, filename: 'jupiter.jfif')

s1 = Server.create(name: "Pokemon", direct_message: false, owner_id: u1.id)
s2 = Server.create(name: "League of Legends", direct_message: false, owner_id: u2.id)
s3 = Server.create(name: "Smash Bros", direct_message: false, owner_id: u3.id)
s4 = Server.create(name: "aA", direct_message: false, owner_id: u4.id)
s5 = Server.create(name: "Amazon Deals", direct_message: false, owner_id: u5.id)

c1 = Channel.create(name: "Evee Training", server_id: s1.id, creator_id: u1.id)
c2 = Channel.create(name: "Aram Fans Only", server_id: s2.id, creator_id: u2.id)
c3 = Channel.create(name: "Character News", server_id: s3.id, creator_id: u3.id)
c4 = Channel.create(name: "Graduates", server_id: s4.id, creator_id: u4.id)
c5 = Channel.create(name: "Game Deals", server_id: s5.id, creator_id: u5.id)

sf1 = open('https://icecord-seed.s3.amazonaws.com/server/server/pokemon.jfif')
s1.photo.attach(io: sf1, filename: 'pokemon.jfif')
sf2 = open('https://icecord-seed.s3.amazonaws.com/server/server/leagueoflegends.jfif')
s2.photo.attach(io: sf2, filename: 'leagueoflegends.jfif')
sf3 = open('https://icecord-seed.s3.amazonaws.com/server/server/smashbros.jfif')
s3.photo.attach(io: sf3, filename: 'smashbros.jfif')
sf4 = open('https://icecord-seed.s3.amazonaws.com/server/server/aA.png')
s4.photo.attach(io: sf4, filename: 'aA.png')
sf5 = open('https://icecord-seed.s3.amazonaws.com/server/server/amazondeals.jfif')
s5.photo.attach(io: sf5, filename: 'amazondeals.jfif')

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



