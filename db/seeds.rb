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

10.times do 
    User.create(
        username: Faker::Name.name,
        password: Faker::Alphanumeric.alphanumeric(number: 10),
        profile_name: Faker::Superhero.name, 
        profile_image_url: Faker::Placeholdit.image, 
        bio: Faker::Hacker.say_something_smart)
end

10.times do
    SnacksPost.create(
        title: Faker::Beer.style, 
        content:Faker::TvShows::HowIMetYourMother.quote, 
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


