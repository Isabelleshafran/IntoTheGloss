# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 
Category.delete_all
Product.delete_all

guest = User.create!(email: "guest@glossier.io", password: "password", first_name: "guest", last_name: "user")

# skincare = category 1
# Makeup = category 2
# Body = category 3

c4 = Category.create!(
    name: 'shopall'
)

c1 = Category.create!(
    name: "skincare"
)

c2 = Category.create!(
    name: "makeup"
)

c3 = Category.create!(
    name: "body"
)

p1 = Product.create!(
    title: "The Skincare Edit",
    description: "mini skincare essentials", 
    details: "A full Glossier skincare routine, in irresistible miniature sizes.
    What it is: Back by popular demand! Our skincare bestsellers in miniature sizes, plus a soft, stretchy pink logo headband—to give or to keep.", 
    price: 50, 
    category_id: c1.id 
)


# amazon link from pic in bucket
# image is the assoction

# index will pull first picture 
# show will display all of the pictures 

p2 = Product.create!(
    title: "The 3-Step Skincare Routine",
    description: "cleanser + moisturizer + lip balm", 
    details: "The non-negotiables.
    What it is: If you only use three products a day, these are the ones: our iconic face wash + versatile, buildable moisturizer + bestselling lip balm.", 
    price: 40, 
    category_id: c1.id
)

file2 = open('https://intothegloss-seeds.s3-us-west-1.amazonaws.com/skincare_set_edit.jpg')
p2.image.attach(io: file2, filename: 'skincare_set.png', content_type: 'jpg')



p3 = Product.create!(
    title: "Milk Jelly Cleanser",
    description: "conditioning face wash", 
    details: "Everything a cleanser should be. What it is: A gentle-yet-effective creamy gel face wash for all skin types", 
    price: 9, 
    category_id: c1.id
)

p4 = Product.create!(
    title: "Futuredew",
    description: "oil serum hybrid", 
    details: "An instant dewy glow that lasts.
    What it is: A shortcut to the way your skin looks after a full skincare routine—dewy, glowing, cared-for—in one long-wearing product", 
    price: 24, 
    category_id: c1.id
)

p5 = Product.create!(
    title: "Solution",
    description: "exfoliating skin perfector", 
    details: "Transforms the look of skin in four weeks.
    What it is: A gentle way to slough away dead skin to reveal a fresh, smooth complexion", 
    price: 24, 
    category_id: c1.id
)

p6 = Product.create!(
    title: "Boy Brow",
    description: "grooming pomade", 
    details: "Fluffy, instantly groomed brows.
    What it is: A brushable, creamy wax that visibly thickens, shapes, and grooms brows into place", 
    price: 16, 
    category_id: c2.id
)

p7 = Product.create!(
    title: "Cloud Paint",
    description: "seamless cheek color", 
    details: "The most user-friendly blush under the sun.
    What it is: A seamless, buildable gel-cream blush that’s enjoyable to apply and easy to wear.", 
    price: 18, 
    category_id: c2.id 
)

p8 = Product.create!(
    title: "Generation G",
    description: "sheer matte lipstick", 
    details: "A new generation of lipstick.
    What it is: A lip color that gives the look and finish of just-blotted lipstick, without the blot", 
    price: 18, 
    category_id: c2.id 
)

p9 = Product.create!(
    title: "Lip Gloss",
    description: "cushiony glassy shine", 
    details: "High shine without the stickiness.
    What it is: A comfortable, long-wearing lip gloss with a glassy finish", 
    price: 14, 
    category_id: c2.id 
)


p10 = Product.create!(
    title: "Body Hero Exfoliating Bar",
    description: "exfoliating bar", 
    details: "You’re going to be so smooth.
    What it is: Our ergonomically designed, no-mess body scrub fits in the palm of your hand and sloughs away dead skin and dryness—revealing soft, baby-smooth skin.", 
    price: 14, 
    category_id: c3.id
)

p11 = Product.create!(
    title: "Hand Cream",
    description: "creme pour les mains", 
    details: "Always have hydration on hand.    
    What it is: Supercharged moisture in a palm-sized pod with sleek curves and 360º squeeze.", 
    price: 18, 
    category_id: c3.id
)

p12 = Product.create!(
    title: "Body Hero Daily Perfecting Cream",
    description: "daily perfecting cream", 
    details: "A skincare-grade body lotion.
    What it is: A body cream inspired by face products—that does more than just moisturize", 
    price: 22, 
    category_id: c3.id
)

