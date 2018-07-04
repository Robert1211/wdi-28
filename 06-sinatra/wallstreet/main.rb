require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb :home
end

get '/price' do
  @stock_symbol = params[:stock_symbol]

  @info = StockQuote::Stock.quote @stock_symbol

  redirect to('/') if @info.nil? # Rudimentary error handling

  @price = @info.close
  erb :price
end
