# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.reset_pk_sequence
Comment.destroy_all
Comment.reset_pk_sequence
SnacksPost.destroy_all
SnacksPost.reset_pk_sequence
Tag.destroy_all 
Tag.reset_pk_sequence
Reply.destroy_all
Reply.reset_pk_sequence
SnackTagJoin.destroy_all
SnackTagJoin.reset_pk_sequence
XpJoiner.destroy_all
XpJoiner.reset_pk_sequence

puts "Starting Seeding..."

danko = User.create(
    username: "Danko Karleusa", 
    password:"12345678", 
    password_confirmation:"12345678", 
    admin: true,
    profile_name: "Zirael", 
    profile_image_url: "https://cdn-images-1.medium.com/max/1000/1*cBDcE5qLaH-K1zx5NGA9Jw.jpeg", 
    bio: "THE CROATIAN SENSATION")
   

anniemarie = User.create(
    username: "Anniemarie Lucernoni", 
    password:"12345678", 
    password_confirmation:"12345678", 
    admin: true, 
    profile_name: "Typsy Cyclist", 
    profile_image_url: Faker::Placeholdit.image, 
    bio: "I drink and bike!")
    

leah = User.create(
    username: "Leah Chen", 
    password:"12345678", 
    password_confirmation:"12345678", 
    admin: true,
    profile_name: "Snack Queen", 
    profile_image_url: Faker::Placeholdit.image, 
    bio: "Bow down and bring me snacks!") 
   


10.times do 
    User.create(
        username: Faker::Name.name,
        password:"12345678", 
        password_confirmation:"12345678",
        profile_name: Faker::Superhero.name, 
        profile_image_url: Faker::Placeholdit.image, 
        bio: Faker::Hacker.say_something_smart)
end

5.times do 
    SnacksPost.create(
        title: Faker::Game.title, 
        content:Faker::TvShows::BojackHorseman.quote, 
        post_image_url: Unsplash::Photo.random.urls.small,
        xp: rand(1..1000), 
        views: rand(1..10000),
        user_id: 1)
end

10.times do
    SnacksPost.create(
        title: Faker::Beer.style, 
        content:Faker::TvShows::HowIMetYourMother.quote, 
        post_image_url: Unsplash::Photo.random.urls.small,
        xp: rand(1..1000), 
        views: rand(1..10000),
        user_id: User.ids.sample)
end

10.times do 
    Tag.create(tag_name: Faker::Emotion.adjective)
end


10.times do 
    XpJoiner.create(
        user_id: User.ids.sample, 
        snacks_post_id: SnacksPost.ids.sample)
end

10.times do
    SnackTagJoin.create(
        snacks_post_id: SnacksPost.ids.sample, 
        tag_id: Tag.ids.sample)
end

10.times do 
    Comment.create(
        comment: Faker::Quote.yoda, 
        snacks_post_id: SnacksPost.ids.sample,
        user_id: User.ids.sample)
end

10.times do 
    Reply.create(
        reply: Faker::Quote.famous_last_words,
        user_id: User.ids.sample,
        comment_id: Comment.ids.sample)
end

puts "Seeding, complete!"


