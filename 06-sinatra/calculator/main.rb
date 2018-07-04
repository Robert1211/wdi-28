require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  # Tidy up the user inputs
  @x = params[:x].to_f
  @y = params[:y].to_f

  # Perform the operation
  @result = case params[:operator]
  when '+' then @x + @y
  when '-' then @x - @y
  when '*' then @x * @y
  when '/' then @x / @y
  end

  # Render the result
  erb :result
end

get '/about' do
  erb :about
end
