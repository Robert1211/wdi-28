require 'sinatra'
require 'sinatra/reloader' # Restart the server whenever the files change
require 'pry' # New gems DO STILL require a restart

# Static URLs
get '/' do
  "Hello World from the homepage"
end

get '/hello' do
  "Hello World" # Implicitly return the string we wish to have appear in the browser
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end


# Dynamic URLs
get '/fanclub/:name' do
  # The params hash has *indifferent hash access*
  "#{ params[:name].capitalize } is a member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club and my favourite Marx Brother is #{ params[:favourite] }"
end

# Crappy calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end

# Problems
# 1. Where is the HTML?
# 2. How can we get information from the user without making them change the URL?
