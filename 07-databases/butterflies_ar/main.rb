require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

# Rails will do this for you, but meanwhile in Sinatra
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
  belongs_to :plant, :optional => true # required since Rails 5
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# New (needs to come before /butterflies/:id)
get '/butterflies/new' do
  erb :butterflies_new
end

# Create
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save # An ID will be added to our object
  redirect to("/butterflies/#{ butterfly.id }") # This will be a GET request
end

# Show
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# Edit
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# Update
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{ butterfly.id }")
end

# Delete
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies') # Another GET request
end

# Index
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# New
get '/plants/new' do
  erb :plants_new
end

# Create
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# Show
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

# Edit
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# Update
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# Delete
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
end

get '/pry' do
  binding.pry # This is a bit naughty
end
