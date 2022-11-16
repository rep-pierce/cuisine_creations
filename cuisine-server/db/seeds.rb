puts "Creating Users..."
a = User.create(name: 'a', age: 1, username: 'a', password: 'a')
b = User.create(name: 'b', age: 1, username: 'b', password: 'b')
c = User.create(name: 'c', age: 1, username: 'c', password: 'c')
d = User.create(name: 'd', age: 1, username: 'd', password: 'd')

puts "Creating Recipes..."
gc = Recipe.create(name: 'Grilled Cheese', user: a)
hc = Recipe.create(name: 'Ham and Cheese', user: b)
pbj = Recipe.create(name: 'PB&J', user: c)
hs = Recipe.create(name: 'Ham Sandwich', user: d)

puts "Creating Ingredients..."
i1 = Ingredient.create(name: 'Peanut Butter', calories: 100, picture: 'pb' )
i2 = Ingredient.create(name: 'Ham', calories: 70, picture: 'ham' )
i3 = Ingredient.create(name: 'Cheese Slice', calories: 90, picture: 'cheese' )
i4 = Ingredient.create(name: 'Bread Slice', calories: 60, picture: 'bread' )
i5 = Ingredient.create(name: 'Jelly', calories: 80, picture: 'jelly' )

puts "Creating Joinirs..."
j1 = Joinir.create(recipe: pbj, ingredient: i1)
j2 = Joinir.create(recipe: pbj, ingredient: i4)
j3 = Joinir.create(recipe: gc, ingredient: i4)
j4 = Joinir.create(recipe: gc, ingredient: i3)
j5 = Joinir.create(recipe: hc, ingredient: i4)
j6 = Joinir.create(recipe: hc, ingredient: i2)
j7 = Joinir.create(recipe: hc, ingredient: i3)
j8 = Joinir.create(recipe: pbj, ingredient: i5)
j9 = Joinir.create(recipe: hs, ingredient: i4)
j10 = Joinir.create(recipe: hs, ingredient: i2)

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