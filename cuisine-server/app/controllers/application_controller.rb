class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    
    get '/recipes' do
      recipes = Recipe.all
      recipes.to_json
    end

    get '/recipes/:id' do
      recipe = Recipe.find(params[:id])
      recipe.to_json(include: :steps)
    end

    post '/recipes' do
      recipe = Recipe.create(name:params[:name], user:params[:user])
      # joinir = Joinir.create(recipe: recipe.id, ingredient:)
    end

    delete '/recipes/:id' do
      recipe = Recipe.find(params[:id])
      recipe.destroy
      recipe.to_json
    end

    get '/users' do
      users = User.all
      users.to_json
    end

    get '/users/:id' do
      user = User.find(params[:id])
      user.to_json
    end

    post '/users' do
      user = User.create(name:params[:name], age:params[:age], username:params[:username], password:params[:password])
    end

    delete '/users/:id' do
      user = User.find(params[:id])
      user.destroy
      user.to_json
    end

    get '/ingredients' do
      ingredients = Ingredient.all
      ingredients.to_json
    end

    get '/ingredients/:id' do
      ingredient = Ingredient.find(params[:id])
      ingredient.to_json
    end

    post '/ingredients' do
      ingredient = Ingredient.create(name:params[:name], calories:params[calories], picture:params[:picture])
      ingredient.to_json
    end

    delete '/ingredients/:id' do
      ingredient = Ingredient.find(params[:id])
      ingredient.destroy
      ingredient.to_json
    end
    
  end