require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterflies = db.execute 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# New (needs to come before /butterflies/:id)
get '/butterflies/new' do
  erb :butterflies_new
end

# Create
post '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.execute "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  redirect to('/butterflies') # This will be a GET request
end

# Show
get '/butterflies/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Strip off the outer array
  erb :butterflies_show
end
