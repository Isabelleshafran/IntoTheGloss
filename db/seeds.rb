# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

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
    details: "A full Glossier skincare routine, in irresistible miniature sizes. Back by popular demand! Our skincare bestsellers in miniature sizes, plus a soft, stretchy pink logo headband—to give or t
    o keep.", 
    whyspecial: "A daily skincare routine (for all skin types) for fresh, moisturized, dewy skin.
    Includes: iconic Milky Jelly Cleanser, ultra-hydrating Super Bounce serum, deeply comforting Priming Moisturizer Rich, soothing Balm Dotcom (in Original and Rose), light-reflecting Futuredew oil-serum hybrid, plus a pink, nylon-spandex headband (ideal for washing your face) printed with the signature Glossier G logo", 
    img_url: "1.jpg",
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
    details: "The non-negotiables. If you only use three products a day, these are the ones: our iconic face wash + versatile, buildable moisturizer + bestselling lip balm.", 
    whyspecial: "Milky Jelly Cleanser: a pH-balanced, creamy gel face wash made with a blend of five skin conditioners that soothe + condition while cleansing away dirt, excess oil, and makeup.
    Priming Moisturizer: a lightweight moisturizer (with an Anti-Redness Complex) that lets you layer and build up to the perfect amount of hydration", 
    img_url: "2.jpg",     
    price: 40, 
    category_id: c1.id
)

# file2 = open('https://intothegloss-seeds.s3-us-west-1.amazonaws.com/skincare_set_edit.jpg')
# p2.image.attach(io: file2, filename: 'skincare_set.png', content_type: 'jpg')



p3 = Product.create!(
    title: "Milk Jelly Cleanser",
    description: "conditioning face wash", 
    details: "Everything a cleanser should be. A gentle-yet-effective creamy gel face wash for all skin types", 
    whyspecial: "A pH-balanced daily cleanser with five skin conditioners that won’t leave your skin irritated or feeling tight.
    The same gentle cleansing agents found in contact lens solution make it safe for eyes", 
    img_url: "3.jpg", 
    price: 9, 
    category_id: c1.id
)

p4 = Product.create!(
    title: "Futuredew",
    description: "oil serum hybrid", 
    details: "An instant dewy glow that lasts. A shortcut to the way your skin looks after a full skincare routine—dewy, glowing, cared-for—in one long-wearing product", 
    whyspecial: "Nourishing oils (that don’t feel greasy) immediately give you a gleamy, well-moisturized look that lasts up to 12 hours.
    Powerful plant-based extracts work to make your skin look brighter, instantly and over time", 
    img_url: "4.jpg",     
    price: 24, 
    category_id: c1.id
)

p5 = Product.create!(
    title: "Solution",
    description: "exfoliating skin perfector", 
    details: "Transforms the look of skin in four weeks. A gentle way to slough away dead skin to reveal a fresh, smooth complexion", 
    whyspecial: "Unlike physical scrubs, Solution uses a 10% blend of skincare acids to “unglue” dead skin and sweep it away, so your complexion appears smoother, softer, and glowier.
    Includes three acid groups: Alpha Hydroxy Acid (AHA), Beta Hydroxy Acid (BHA), and Polyhydroxy Acid (PHA)", 
    img_url: "5.jpg",     
    price: 24, 
    category_id: c1.id
)

p6 = Product.create!(
    title: "Priming Moisterizer Rich",
    description: "luxurious face cream", 
    details: "An ultrarich, buttery moisturizer. A rich, deeply moisturizing yet fast-absorbing face cream for day or night",
    whyspecial: "A blend of shea and murumuru butters melt right into skin for a sumptuous feel. Rich in ceramides and fatty acids that reinforce skin’s moisture barrier and lock in moisture over time.", 
    img_url: "6.jpg",     
    price: 35, 
    category_id: c1.id
)

p7 = Product.create!(
    title: "Super Bounce",
    description: "hyaluronic acid + vitamin b5 serum", 
    details: "A refreshing Hyaluronic Acid serum for an instantly soft, smooth (never sticky!) canvas. A soothing combination of 2% Hyaluronic Acid Complex and Pro-Vitamin B5 that hydrates the skin on multiple levels.",
    whyspecial: "Three molecular weights of Hyaluronic Acid pull moisture deep into the skin (and keep it there) to instantly smooth the skin’s surface.
Pro-Vitamin B5 promotes long-term hydration and healthy looking skin.", 
    img_url: "7.jpg",     
    price: 28, 
    category_id: c1.id
)

p8 = Product.create!(
    title: "Super Glow",
    description: "vitamin c + magnesium serum", 
    details: "A nourishing Vitamin C serum for visibly smoother, more even-toned skin, over time. A potent, stable formulation of 5% Vitamin C derivative MAP + Magnesium PCA that delivers key ingredients without irritating sensitive skin.",
    whyspecial: "Our Vitamin C derivative (Magnesium Ascorbyl Phosphate aka MAP) helps even tone and improve the appearance of dark spots (and because it’s stable, it won’t oxidize or degrade after you open the bottle), while Magnesium PCA enhances hydration and replenishes moisture, so skin looks recharged, fresh, and glowy. Jojoba Oil, Shea Butter, and Sunflower Seed Oil and Evodia Rutaecarpa Fruit Extract condition and nourish skin", 
    img_url: "8.jpg",     
    price: 28, 
    category_id: c1.id
)

p9 = Product.create!(
    title: "Priming Moisturizer",
    description: "buildable hydrating creme", 
    details: "Light and buildable moisture for a dewy, smooth canvas. A moisturizer that instantly brings out the best in your skin, making it fresh and glowing.",
    whyspecial: "Anti-Redness Complex soothes while the Oxygenating Agent breathes life into stressed skin, giving it a clean, dewy, balanced finish.
Lightweight, buildable texture means you can apply one or more layers depending on the climate, season, or how your skin’s feeling", 
    img_url: "9.jpg",     
    price: 22, 
    category_id: c1.id
)

p10 = Product.create!(
    title: "Moisturizing Moon Mask",
    description: "soothing face treament", 
    details: "The most intensely hydrating mask we could make. A creamy, dreamy, works-on-all-skin-types mask for deep hydration.",
    whyspecial: "Formulated with Sweet Almond Oil, plant-based Squalane, and Hyaluronic Acid to boost skin’s hydration, this mask helps smooth the appearance of fine lines
    Licorice Root and Lemon Fruit Extract visibly brighten and even out the complexion, while Honey and Aloe soothe skin", 
    img_url: "10.jpg",     
    price: 22, 
    category_id: c1.id
)

p11 = Product.create!(
    title: "Boy Brow",
    description: "grooming pomade", 
    details: "Fluffy, instantly groomed brows. A brushable, creamy wax that visibly thickens, shapes, and grooms brows into place", 
    whyspecial: "Inspired by traditional hair pomade, it gives brows soft, flexible hold in one easy swipe, and doesn't stiffen or flake.
Contains Oleic Acid, Lecithin, and Soluble Collagen to condition and moisturize brows", 
    img_url: "11.jpg",     
    price: 16, 
    category_id: c2.id
)

p12 = Product.create!(
    title: "Cloud Paint",
    description: "seamless cheek color", 
    details: "The most user-friendly blush under the sun. A seamless, buildable gel-cream blush that’s enjoyable to apply and easy to wear.", 
    whyspecial: "Just sheer enough upon initial application to make it easy to work with and layer without going overboard—simply dab it on cheeks and tap into skin for a natural, flushed-from-within glow.
Special Blurring Pigments give a soft-focus effect that doesn’t accentuate texture or pores—as if you just happen to be in golden hour lighting all the time.", 
    img_url: "12.jpg",     
    price: 18, 
    category_id: c2.id 
)

p13 = Product.create!(
    title: "Generation G",
    description: "sheer matte lipstick", 
    details: "A new generation of lipstick. A lip color that gives the look and finish of just-blotted lipstick, without the blot", 
    whyspecial: "Dialed-down pigment adapts to your natural lip color and gives a casual look that appears a little different on everyone.
Diffused, matte texture makes it easy to swipe on anywhere—no mirror needed", 
    img_url: "13.jpg",     
    price: 18, 
    category_id: c2.id 
)

p14 = Product.create!(
    title: "Lip Gloss",
    description: "cushiony glassy shine", 
    details: "High shine without the stickiness. A comfortable, long-wearing lip gloss with a glassy finish", 
    whyspecial: "Fuzzy doe-foot applicator scoops up just the right amount of gloss, giving you instant shine in one swipe.
Vitamin E and Jojoba Oil keep lips cushiony soft and moisturized", 
    img_url: "14.jpg",     
    price: 14, 
    category_id: c2.id 
)

p15 = Product.create!(
    title: "Lash Slick",
    description: "film form mascara", 
    details: "Extensions without the extensions. The perfect everyday black mascara", 
    whyspecial: "Curls and sculpts as it lengthens, creating a natural “baby extension” effect without clumping.
Teeny-tiny fibers coat lashes from root to tip, while flexible film-forming polymers lift and lock each fiber into place", 
    img_url: "15.jpg",     
    price: 16, 
    category_id: c2.id 
)

p16 = Product.create!(
    title: "Lidstar",
    description: "glistening eye glow", 
    details: "Less shadow, more glow. Soft, glistening eye color that lasts all day", 
    whyspecial: "Creates a sheer veil of color that locks onto lids without creasing (so no need for primer).
Ultrafine pigments are enveloped in a buttery base for a silky, blendable formula that swipes on easily", 
    img_url: "16.jpg",     
    price: 18, 
    category_id: c2.id 
)

p17 = Product.create!(
    title: "Pro Tip",
    description: "brush point liquid eyeliner", 
    details: "Get a smooth, precise line every time. An easy-to-use black liquid eyeliner with a brush tip for precise definition, in a smudge-resistant formula", 
    whyspecial: "The pen’s brush tip was designed with flexible fibers that hug the curve of the lash line for easy application.
Densely-pigmented, buildable formula dries quickly so it doesn’t smudge and stays put for up to 12 hours", 
    img_url: "17.jpg",     
    price: 16, 
    category_id: c2.id 
)

p23 = Product.create!(
    title: "Haloscope",
    description: "dew effect highlighter", 
    details: "Find your light. A crystal-infused highlighter with skin conditioning benefits", 
    whyspecial: "The stick’s outer core (the “halo”) is formulated with genuine crystal extracts for an all-day glow that’s not glittery.
The solid, oil-based inner core is made from vitamin-rich moisturizers for a hydrated, dewy finish", 
    img_url: "23.jpg",     
    price: 22, 
    category_id: c2.id 
)




p18 = Product.create!(
    title: "Body Hero Exfoliating Bar",
    description: "exfoliating bar", 
    details: "You’re going to be so smooth. Our ergonomically designed, no-mess body scrub fits in the palm of your hand and sloughs away dead skin and dryness—revealing soft, baby-smooth skin.", 
    whyspecial: "Finely milled, biodegradable Bamboo Powder creates the powerful (but not so powerful that you'll feel like you rubbed off the top layer of your skin) scrub action that exfoliates—for skin that feels instantly softer and smoother.
    Sunflower Seed Oil and Aloe Leaf Juice help lock in moisture, so skin never feels dry or stripped", 
    img_url: "18.jpg",     
    price: 14, 
    category_id: c3.id
)

p19 = Product.create!(
    title: "Hand Cream",
    description: "creme pour les mains", 
    details: "Always have hydration on hand. Supercharged moisture in a palm-sized pod with sleek curves and 360º squeeze.", 
    whyspecial: "Fast-absorbing, nutrient-rich moisturizers (like Meadowfoam Seed Oil and Coconut Fruit Extract) nourish without a greasy feel.
    Uses a “Second Skin” Matrix to hold moisture in and keep skin-stressors out", 
    img_url: "19.jpg",     
    price: 18, 
    category_id: c3.id
)

p20 = Product.create!(
    title: "Body Hero Daily Perfecting Cream",
    description: "daily perfecting cream", 
    details: "A skincare-grade body lotion. A body cream inspired by face products—that does more than just moisturize", 
    whyspecial: "An antioxidant-rich mix of Cactus Flower Extract, Prickly Pear Extract, and Yucca Extract keeps skin moisturized all day with zero residue and zero stickiness (so you can put your clothes on now).
    Tiny light-reflecting particles and brightening plant extracts give skin an instant, radiant glow", 
    img_url: "20.jpg",     
    price: 22, 
    category_id: c3.id
)

p21 = Product.create!(
    title: "The Nighstand Duo",
    description: "holiday exclusive", 
    details: "Within reach at all times. Because it’s nice to know you’ve got lip balm and hand cream nearby whenever you need them—a limited-edition duo to give (or to keep).", 
    whyspecial: "Hand Cream: fast-absorbing and nutrient-rich moisture for hands—in a sleek, squeezable, palm-sized pod with a fresh, clean, reimagined Glossier You scent.
    Balm Dotcom: an ultra-moisturizing balm that’s packed with antioxidants and natural emollients to nourish and soothe lips", 
    img_url: "21.jpg",     
    price: 22, 
    category_id: c3.id
)

p22 = Product.create!(
    title: "Body Hero Daily Oil Wash",
    description: "daily oil wash", 
    details: "Body wash goes luxe. An oil cleanser inspired by the ones for your face, made for your body", 
    whyspecial: "Seven-oil blend attracts grime and sweat like a magnet, lifting it from your skin. Turns frothy when it mixes with water, then washes away without drying out skin", 
    img_url: "22.jpg",     
    price: 18, 
    category_id: c3.id
)


s1 = Shade.create!(
    name: "Black", 
    product_id: p11.id, 
    img_url: ""
)

s2 = Shade.create!(
    name: "Brown", 
    product_id: p11.id, 
    img_url: ""
)

s3 = Shade.create!(
    name: "Auburn", 
    product_id: p11.id, 
    img_url: ""
)

s4 = Shade.create!(
    name: "Blond", 
    product_id: p11.id, 
    img_url: ""
)

s5 = Shade.create!(
    name: "Clear", 
    product_id: p11.id, 
    img_url: ""
)

s6 = Shade.create!(
    name: "Storm", 
    product_id: p12.id, 
    img_url: ""
)

s7 = Shade.create!(
    name: "Dawn", 
    product_id: p12.id, 
    img_url: ""
)

s8 = Shade.create!(
    name: "Puff", 
    product_id: p12.id, 
    img_url: ""
)

s9 = Shade.create!(
    name: "Haze", 
    product_id: p12.id, 
    img_url: ""
)


s10 = Shade.create!(
    name: "Cake", 
    product_id: p13.id, 
    img_url: ""
)

s11 = Shade.create!(
    name: "Crush", 
    product_id: p13.id, 
    img_url: ""
)

s12 = Shade.create!(
    name: "Zip", 
    product_id: p13.id, 
    img_url: ""
)

s13 = Shade.create!(
    name: "Jam", 
    product_id: p13.id, 
    img_url: ""
)

s14 = Shade.create!(
    name: "Holographic", 
    product_id: p14.id, 
    img_url: "holographic.jpg"
)

s15 = Shade.create!(
    name: "Red", 
    product_id: p14.id, 
    img_url: "red.jpg"
)
s16 = Shade.create!(
    name: "Gold", 
    product_id: p14.id, 
    img_url: "gold.jpg"
)

s17 = Shade.create!(
    name: "Fawn", 
    product_id: p16.id, 
    img_url: ""
)

s18 = Shade.create!(
    name: "Cub", 
    product_id: p16.id, 
    img_url: ""
)

s19 = Shade.create!(
    name: "Moon", 
    product_id: p16.id, 
    img_url: ""
)

s20 = Shade.create!(
    name: "Topaz", 
    product_id: p23.id, 
    img_url: ""
)


s21 = Shade.create!(
    name: "Quartz", 
    product_id: p23.id, 
    img_url: ""
)


s22 = Shade.create!(
    name: "Moonstone", 
    product_id: p23.id, 
    img_url: ""
)