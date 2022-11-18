puts "Creating Users..."
a = User.create(name: 'a', age: 1, username: 'a', password: 'a')
b = User.create(name: 'b', age: 1, username: 'b', password: 'b')
c = User.create(name: 'c', age: 1, username: 'c', password: 'c')
d = User.create(name: 'd', age: 1, username: 'd', password: 'd')

puts "Creating Recipes..."
gc = Recipe.create(name: 'Grilled Cheese', user: a, picture: 'https://www.seriouseats.com/thmb/mNOsBHQ_7Lvh_U_hjVrTNnFbU8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/09122022-GrilledCheeseRecipe-AmandaSuarez-hero-45b9005b410141a1979942a8d070be79.JPG')
hc = Recipe.create(name: 'Ham and Cheese', user: b, picture: 'https://marketsandwich.com/wp-content/uploads/2019/05/Market_Sandwich-Mega-SmokedHamCheese-basic.jpg')
pbj = Recipe.create(name: 'PB&J', user: c, picture: 'https://hips.hearstapps.com/hmg-prod/images/open-face-peanut-butter-and-jelly-sandwich-royalty-free-image-1591127958.jpg?crop=1.00xw:0.752xh;0,0.151xh&resize=1200:*')
hs = Recipe.create(name: 'Ham Sandwich', user: d, picture: 'https://www.julieseatsandtreats.com/wp-content/uploads/2013/03/Crock-Pot-Hot-Ham-Cheese-Close-768x1152.jpg')

puts "Creating Ingredients..."
i1 = Ingredient.create(name: 'Peanut Butter', calories: 6, picture: 'pb' )
i2 = Ingredient.create(name: 'Ham', calories: 1, picture: 'ham' )
i3 = Ingredient.create(name: 'Cheese Slice', calories: 4, picture: 'cheese' )
i4 = Ingredient.create(name: 'Bread Slice', calories: 3, picture: 'bread' )
i5 = Ingredient.create(name: 'Jelly', calories: 5, picture: 'jelly' )

puts "Creating Joinirs..."
j1 = Joinir.create(recipe: pbj, ingredient: i1, amount: 32)
j2 = Joinir.create(recipe: pbj, ingredient: i4, amount: 100)
j3 = Joinir.create(recipe: gc, ingredient: i4, amount: 100)
j4 = Joinir.create(recipe: gc, ingredient: i3, amount: 25)
j5 = Joinir.create(recipe: hc, ingredient: i4, amount: 100)
j6 = Joinir.create(recipe: hc, ingredient: i2, amount: 35)
j7 = Joinir.create(recipe: hc, ingredient: i3, amount: 25)
j8 = Joinir.create(recipe: pbj, ingredient: i5, amount: 32)
j9 = Joinir.create(recipe: hs, ingredient: i4, amount: 100)
j10 = Joinir.create(recipe: hs, ingredient: i2, amount: 35)

puts "Creating Lists..."
l1 = List.create(user: a, recipe: gc)
l2 = List.create(user: b, recipe: hc)
l3 = List.create(user: c, recipe: pbj)
l4 = List.create(user: d, recipe: hs)

puts "Creating Steps..."
s1 = Step.create(recipe: gc, action: 'butter your bread')
s2 = Step.create(recipe: gc, action: 'griddle it all')
s3 = Step.create(recipe: hc, action: 'put ham on bread')
s4 = Step.create(recipe: pbj, action: 'lather it down and put it together')

puts "Creating Ratings..."
r1 = Rating.create(rate: 4, recipe: pbj, user: a)
r2 = Rating.create(rate: 2, recipe: pbj, user: c)
r3 = Rating.create(rate: 1, recipe: hs, user: b)
r4 = Rating.create(rate: 5, recipe: pbj, user: d)
r5 = Rating.create(rate: 4, recipe: gc, user: a)
r6 = Rating.create(rate: 2, recipe: hs, user: a)