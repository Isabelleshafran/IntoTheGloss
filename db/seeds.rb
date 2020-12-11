# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/4E7T6gHDOnlznnRLYc0icG/efc2979720cda036c6b490dc52a90409/02.jpg?w=1400&q=80&fm=webp", 
    description: "mini skincare essentials", 
    details: "A full Glossier skincare routine, in irresistible miniature sizes.
    What it is: Back by popular demand! Our skincare bestsellers in miniature sizes, plus a soft, stretchy pink logo headband—to give or to keep.", 
    price: 50, 
    category_id: c1.id 


p2 = Product.create!(
    title: "The 3-Step Skincare Routine",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/7HH4KlaJsl15RCmQSMtD94/b2e464af98afc3b5722844db08f3da17/skincare-set_1.jpg?w=1400&q=80&fm=webp", 
    description: "cleanser + moisturizer + lip balm", 
    details: "The non-negotiables.
    What it is: If you only use three products a day, these are the ones: our iconic face wash + versatile, buildable moisturizer + bestselling lip balm.", 
    price: 40, 
    category_id: c1.id
)

p3 = Product.create!(
    title: "Milk Jelly Cleanser",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/4yaPsX1SaYpFfGjaOxy0yt/39601e753821ef7459069d6ad198f043/MilkyJelly_Carousel_1.jpg?w=1400&q=80&fm=webp", 
    description: "conditioning face wash", 
    details: "Everything a cleanser should be. What it is: A gentle-yet-effective creamy gel face wash for all skin types", 
    price: 9, 
    category_id: c1.id
)

p4 = Product.create!(
    title: "Futuredew",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/TzjodgY4c7VPMYG5ExXpk/96d2cad935c43ddfee95b58244ee871f/3.png?w=1400&q=80&fm=webp", 
    description: "oil serum hybrid", 
    details: "An instant dewy glow that lasts.
    What it is: A shortcut to the way your skin looks after a full skincare routine—dewy, glowing, cared-for—in one long-wearing product", 
    price: 24, 
    category_id: c1.id
)

p5 = Product.create!(
    title: "Futuredew",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/TzjodgY4c7VPMYG5ExXpk/96d2cad935c43ddfee95b58244ee871f/3.png?w=1400&q=80&fm=webp", 
    description: "oil serum hybrid", 
    details: "An instant dewy glow that lasts.
    What it is: A shortcut to the way your skin looks after a full skincare routine—dewy, glowing, cared-for—in one long-wearing product", 
    price: 24, 
    category_id: c1.id
)

p6 = Product.create!(
    title: "Boy Brow",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/2HNEsucEUavVW1XwhBGCdz/524ce95ba277fec17df5d052d6665502/BoyBrow_0_1.jpg?w=1400&q=80&fm=webp", 
    description: "grooming pomade", 
    details: "Fluffy, instantly groomed brows.
    What it is: A brushable, creamy wax that visibly thickens, shapes, and grooms brows into place", 
    price: 16, 
    category_id: c2.id
)

p7 = Product.create!(
    title: "Cloud Paint",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/3pkpOFantfCIBFBEZZmUKE/eba8dd3906d5e7502b902d652ebe559a/CloudPaint.jpg?w=1400&q=80&fm=webp", 
    description: "seamless cheek color", 
    details: "The most user-friendly blush under the sun.
    What it is: A seamless, buildable gel-cream blush that’s enjoyable to apply and easy to wear.", 
    price: 18, 
    category_id: c2.id 
)

p8 = Product.create!(
    title: "Generation G",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/7Myi1KRjNUbF3bXMg36Zvn/805069069a0eb317e62034aa8d628248/GenG_Mekdes_Zip__1_.jpg?w=1400&q=80&fm=webp", 
    description: "sheer matte lipstic", 
    details: "A new generation of lipstick.
    What it is: A lip color that gives the look and finish of just-blotted lipstick, without the blot", 
    price: 18, 
    category_id: c2.id 
)

p9 = Product.create!(
    title: "Lip Gloss",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/705MKGCRqSWB06YrGHR6Fx/726a4b41f0b0a8178763de28eff91e86/01_Lipgloss_Carousel_lipgloss_hand.jpg?w=1400&q=80&fm=webp", 
    description: "cushiony glassy shine", 
    details: "High shine without the stickiness.
    What it is: A comfortable, long-wearing lip gloss with a glassy finish", 
    price: 14, 
    category_id: c2.id 
)


p10 = Product.create!(
    title: "Body Hero Exfoliating Bar",
    img_url: "https://static-assets.glossier.com/production/spree/images/attachments/000/005/527/portrait_normal/exfoliating-bar_2-hover_(1).jpg?1602121843=&w=600&q=80&fm=webp", 
    description: "exfoliating bar", 
    details: "You’re going to be so smooth.
    What it is: Our ergonomically designed, no-mess body scrub fits in the palm of your hand and sloughs away dead skin and dryness—revealing soft, baby-smooth skin.", 
    price: 14, 
    category_id: c3.id
)

p11 = Product.create!(
    title: "Hand Cream",
    img_url: "https://static-assets.glossier.com/production/spree/images/attachments/000/005/228/portrait_normal/HandCream_ShopGrid_1-main.jpg?1587494542=&w=600&q=80&fm=webp", 
    description: "creme pour les mains", 
    details: "Always have hydration on hand.    
    What it is: Supercharged moisture in a palm-sized pod with sleek curves and 360º squeeze.", 
    price: 18, 
    category_id: c3.id
)

p12 = Product.create!(
    title: "Body Hero Daily Perfecting Cream",
    img_url: "https://images.ctfassets.net/p3w8f4svwgcg/16EoxRAV6CYxaGszyfFJDs/418dbdce54086dc7f0a5dc0d75fffbc0/BodyHeroCream.jpg?w=1400&q=80&fm=webp", 
    description: "daily perfecting cream", 
    details: "A skincare-grade body lotion.
    What it is: A body cream inspired by face products—that does more than just moisturize", 
    price: 22, 
    category_id: c3.id
)

